import { useNavigate } from "react-router-dom";
import { Page } from "../../components/Page";

export function Create() {
  const navigate = useNavigate();

  return (
    <Page>
      <h2 className="mb-10">Agora só falta escolher um nome!</h2>
      <input type="text" placeholder="digite um nome para essa sala" className="w-full" />
      <button className="btn btn-primary w-full">Criar sala</button>
      <div className="separator">
        <span onClick={() => { navigate('/sign-in-room') }} className="link">ou entrar numa sala existente</span>
      </div>
    </Page>
  )
}