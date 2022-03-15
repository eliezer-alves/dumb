import { ThemeColors } from "../../components/ThemeColors";

export function Home() {
  return (
    <div className="h-full flex-center">
      <main className="w-1/3 h-2/3 flex-col-center">
        <div className="flex flex-col mb-8">
          <h1 className="font-semibold">Scrum Poker para equipes de desenvolvimento ágil</h1>
          <h3>Ferramenta simples para fazer estimativas.</h3>
        </div>

        <button className="btn btn-primary w-full">Criar nova sala</button>
        <div className="separator">ou entre em uma sala</div>
        <div className="flex-center w-full gap-2">
          <input type="text" placeholder="digite o código da sala" className="w-2/3 m-0"/>
          <button className="btn btn-dark w-1/3 m-0">Entrar</button>
        </div>
      </main>
    </div>
  )
}