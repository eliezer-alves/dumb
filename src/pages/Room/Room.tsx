import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Page } from "../../components/Page";
import { Table } from "../../components/Table";
import { useAuth } from "../../hooks/useAuth";
import { useRoom } from "../../hooks/useRoom";

type RoomParams = {
  id: string;
}
export function Room() {
  const { user, signInWithGoogle } = useAuth();  
  const params = useParams<RoomParams>();
  const roomCode = params.id ?? '';
  const { name, code} = useRoom(roomCode);

  return (
    <Page>
      <div className="flex-col-center gap-4">
      <h2>Bem vindo a sala <strong>{name}</strong></h2>
      <Table content={'My table'} />
      </div>
    </Page>
  )
}