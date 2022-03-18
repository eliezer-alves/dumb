import { useParams } from "react-router-dom";
import { Page } from "../../components/Page";
import { Table } from "../../components/Table";
import { useRoom } from "../../hooks/useRoom";

type RoomParams = {
  id: string;
}
export function Room() {
  const params = useParams<RoomParams>();
  const roomId = params.id ?? '';
  const { name } = useRoom(roomId);

  return (
    <Page>
      <div className="flex-col-center gap-4">
      <h2>Bem vindo a sala <strong>{name}</strong></h2>
      <Table content={'My table'} />
      </div>
    </Page>
  )
}