import { ThemeColors } from "../../components/ThemeColors";

export function Home() {
  return (
    <div className="h-full flex-center">
      <main className="w-1/2 h-2/3 flex-col-center gap-4">
        <div className="flex flex-col">
          <h1 className="font-semibold">Scrum Poker para equipes de desenvolvimento ágil</h1>
          <h3>Ferramenta simples para fazer estimativas.</h3>
        </div>
        <button type="button" className="btn btn-primary w-full">Criar nova sala</button>
        <span>ou</span>
        <input type="text" placeholder="Entre em uma sala já existente com o código"/>
        <ThemeColors/>
      </main>
    </div>
  )
}