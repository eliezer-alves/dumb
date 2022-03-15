import { ThemeColors } from "../../components/ThemeColors";

export function Home() {
  return (
    <div className="h-full flex-center">
      <main className="w-1/3 h-2/3 flex-col-center">
        <div className="flex-col-center mb-14">
          <h1 className="font-semibold text-center">Scrum Poker para equipes de desenvolvimento ágil</h1>
          <h3>Ferramenta simples para fazer estimativas.</h3>
        </div>

        <button className="btn btn-primary w-full">Criar nova sala</button>
        <div className="separator">
          <span className="link">ou entre em uma sala já existente</span>
        </div>
      </main>
    </div>
  )
}