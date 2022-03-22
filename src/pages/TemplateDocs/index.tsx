import { Teste } from "../../components/Modals/Teste";
import { Body } from "../../components/Page/Body";
import { Main } from "../../components/Page/Main";
import { ThemeColors } from "../../components/ThemeColors";

export function TemplateDocs() {
  return (
    <Body>
      <Main>
        <h1 className="font-semibold mb-20">Estilos da aplicação</h1>
        <div className="w-full flex-col-center gap-8">
          <h2>Paleta de Cores</h2>
          <ThemeColors />
        </div>
      </Main>
    </Body>
  )
}