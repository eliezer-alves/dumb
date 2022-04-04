import { useModals } from "../../hooks/useModals";
import { useRoom } from "../../hooks/useRoom";
import { Modal } from "../BaseModal";

export function VotingResult() {
  const { setShowModal } = useModals()
  const { lastVotedTask, handleCloseResultForUser } = useRoom()

  const handleCloseResult = () => {
    handleCloseResultForUser()
    setShowModal(false)
  }

  return (
    <Modal id="voting-result" className="mobile:px-2 mobile:py-5">
      <div className="px-5 pt-5 pb-3 flex flex-col gap-4 bg-white rounded-lg mobile:p-5">
        <span className="text-3xl text-primary-300 font-semibold font-fredoka">Resultado da Votação</span>
        <div className="px-5 py-2 flex flex-col bg-gray-100 rounded-lg mobile:p-5">
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
        <div className="w-full flex items-center justify-end">
          <button onClick={handleCloseResult} className="btn btn-primary">Fechar</button>
        </div>
      </div>
    </Modal>
  );
}