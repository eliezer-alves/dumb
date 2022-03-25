import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components/Page";
import { Main } from "../../components/Page/Main";
import { useAuth } from "../../hooks/useAuth";
import { database } from '../../services/firebase';

export function Create() {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();
  const [roomName, setRoomName] = useState('');

  const handleCreateRoom = async(e: FormEvent) => {
    e.preventDefault()
    if (!user) {
      await signInWithGoogle();
    }

    if (roomName.trim() === '') {
			return;
		}

		const roomRef = database.ref('rooms');

		const firebaseRoom = await roomRef.push({
			name: roomName,
			authorId: user?.id
		});
    

		navigate(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <Page>
      <Main>
        <h2 className="mb-10">Agora só falta escolher um nome!</h2>
        <form onSubmit={handleCreateRoom}>
          <input
            type="text"
            value={roomName}
            onChange={(e) => {setRoomName(e.target.value)}}
            placeholder="digite um nome para essa sala"
            className="w-full mb-2"
          />
          <button type="submit" className="btn btn-primary w-full">&emsp;Criar sala&emsp;</button>
        </form>
        <div className="separator">ou</div>
        <span onClick={() => { navigate('/rooms/sign-in') }} className="link-span">Entrar numa sala existente</span>
      </Main>
    </Page>
  )
}