import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { database } from '../../services/firebase';
import { Page } from "../../components/Page";
import { Main } from "../../components/Page/Main";
import { useAuth } from "../../hooks/useAuth";

export function SignIn() {
  const { user, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
	const [roomCode, setRoomCode] = useState('');

  async function handleJoinRoom(e: FormEvent) {
		e.preventDefault();

    if (!user) {
      await signInWithGoogle();
    }


		if (roomCode.trim() === '') {
			return;
		}

		const roomRef = await database.ref(`rooms/${roomCode}`).get();

		if (!roomRef.exists()) {
			alert('Room does not exixsts.');
			return
		}

		if (roomRef.val().endedAt) {
			alert('Room already closed.');
			return
		}

		navigate(`/rooms/${roomCode}`);
	}

  return (
    <Page>
      <Main>
        <h2 className="mb-10">Já possui o código de uma sala?</h2>
        <form onSubmit={handleJoinRoom}>
          <input
            type="text"
            placeholder="digite o código da sala"
            onChange={e => setRoomCode(e.target.value)}
            value={roomCode}
            className="w-full"
          />
          <button type="submit" className="btn btn-primary w-full">Entrar na sala</button>
          </form>
        <div className="separator">
          <span onClick={() => { navigate('/rooms/new') }} className="link">quero criar um nova sala</span>
        </div>
      </Main>
    </Page>
  )
}