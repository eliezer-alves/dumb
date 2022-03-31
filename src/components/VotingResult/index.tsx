import { useRoom } from "../../hooks/useRoom";
import { Modal } from "../BaseModal";

export function VotingResult() {
  const { lastVotedTask } = useRoom()
  return(
    <Modal id="voting-result">
      <div className="p-10 flex flex-col bg-white rounded-lg mobile:p-5">
        <span className="mb-5 text-3xl text-primary-300 font-semibold font-fredoka">Resultado da Votação</span>
        <div className="flex items-center gap-4">
          <span className="info">Tarefa:</span>
          <h2 className="font-semibold text-gray-600">{lastVotedTask?.title}</h2>
        </div>
        <div className="flex items-center gap-4">
          <span className="info">Média:</span>
          <h2 className="font-semibold text-gray-600">{lastVotedTask?.average}</h2>
        </div>
        <div className="flex items-center gap-4">
          <span className="info">N° Votos:</span>
          <h2 className="font-semibold text-gray-600">{lastVotedTask?.numberOfVotes}</h2>
        </div>
      </div>
    </Modal>
  );
}