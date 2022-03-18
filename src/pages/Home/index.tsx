import { useNavigate } from "react-router-dom"
import { Page } from "../../components/Page";
import { Main } from "../../components/Page/Main";
import { useAuth } from "../../hooks/useAuth";

export function Home() {
  const navigate = useNavigate();
  const { user, signInWithGoogle, signOut } = useAuth();

	async function handleCreateRoom() {
		if (!user) {
			await signInWithGoogle();
		}

    navigate('/rooms/new')
	}


  return (
    <Page>
      <Main>
        <div className="flex-col-center mb-14">
          <h1 className="font-semibold text-center">Scrum Poker para equipes de desenvolvimento ágil</h1>
          <h3>Ferramenta simples para fazer estimativas.</h3>
        </div>

        <button onClick={handleCreateRoom} className="btn btn-primary w-full">Criar nova sala</button>
        <div className="separator">
          <span onClick={() => { navigate('/rooms/sign-in') }} className="link">ou entre em uma sala já existente</span>
        </div>
      </Main>
    </Page>
  )
}