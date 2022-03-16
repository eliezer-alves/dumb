export function Create() {
  return (
    <div className="h-full flex-center">
      <main className="w-1/3 h-2/3 flex-col-center gap-2">
        <h2 className="mb-10">Agora só falta escolher um nome!</h2>
        <input type="text" placeholder="digite um nome para essa sala" className="w-full"/>
        <button className="btn btn-primary w-full">Criar sala</button>
        <div className="separator">
          <span className="link">ou entrar numa sala existente</span>
        </div>
      </main>
    </div>
  )
}