export function SignIn() {
  return (
    <div className="h-full flex-center">
      <main className="w-1/3 h-2/3 flex-col-center gap-2">
        <h2 className="mb-10">Já possui o código de uma sala?</h2>
        <input type="text" placeholder="digite o código da sala" className="w-full"/>
        <button className="btn btn-primary w-full">Entrar na sala</button>
        <div className="separator">
          <span className="link">quero criar um nova sala</span>
        </div>
      </main>
    </div>
  )
}