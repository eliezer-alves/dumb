import { useNavigate } from "react-router-dom"
import { Body } from "../../components/Body";
import { Page } from "../../components/Page";
import { TopBar } from "../../components/TopBar";

export function Home() {
  const navigate = useNavigate();

  return (
    <Page>
      <div className="flex-col-center mb-14">
        <h1 className="font-semibold text-center">Scrum Poker para equipes de desenvolvimento ágil</h1>
        <h3>Ferramenta simples para fazer estimativas.</h3>
      </div>

      <button onClick={() => { navigate('/create-room') }} className="btn btn-primary w-full">Criar nova sala</button>
      <div className="separator">
        <span onClick={() => { navigate('/sign-in-room') }} className="link">ou entre em uma sala já existente</span>
      </div>
    </Page>
  )
}