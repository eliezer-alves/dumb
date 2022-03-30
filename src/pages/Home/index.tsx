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
      <div className="h-full w-full px-8 pt-[4%] flex flex-col items-center xsm:w-2/3 xsm:px-0 lg:w-3/5 xl:w-1/2 mobile:px-4">
        <div className="flex-col-center mb-10">
          <h1 className="font-bold text-center mb-10 mobile:text-left">Scrum Poker para timeboxing em equipes ágil</h1>
          <h3 className="text-center">Ferramenta simples para fazer estimativas.</h3>
        </div>

        <button onClick={handleCreateRoom} className="btn btn-primary w-2/3 mobile:w-full">Criar nova sala</button>
        <div className="separator">
          ou          
        </div>
        <span onClick={() => { navigate('/rooms/sign-in') }} className="link-span text-center">Entrar numa sala já existente</span>
      </div>
    </Page>
  )
}