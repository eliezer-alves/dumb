import { Body } from "../components/Page/Body";
import { Main } from "../components/Page/Main";
import { SideBar } from "../components/SideBar";
import { TaskSideBar } from "../components/TaskSideBar";
import { useModals } from "../hooks/useModals";

export function Teste() {
  const { setShowModal } = useModals()

  return (
    <Body>
      <Main>
        <button className="btn btn-primary" onClick={() => setShowModal('side-bar')}>show side-bar</button>
        <br />
        <button className="btn btn-primary" onClick={() => setShowModal('tasks')}>show tasks</button>
        
        <TaskSideBar />
        <SideBar />
      </Main>
    </Body>
  )
}