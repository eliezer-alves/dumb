import { useNavigate } from "react-router-dom";
import { Page } from "../../components/Page";

export function SignIn() {
  const navigate = useNavigate();

  return (
    <Page>
      <h2 className="mb-10">Já possui o código de uma sala?</h2>
      <input type="text" placeholder="digite o código da sala" className="w-full" />
      <button className="btn btn-primary w-full">Entrar na sala</button>
      <div className="separator">
        <span onClick={() => { navigate('/create-room') }} className="link">quero criar um nova sala</span>
      </div>
    </Page>
  )
}