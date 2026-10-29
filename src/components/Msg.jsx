import { Link } from 'react-router-dom';


function Msg({ participanteNome, quantidadeVotos }) {
  return (
    <div className="msg-container">
      <p>Voto registrado para eliminar <strong>{participanteNome}</strong>. Você já votou <strong>{quantidadeVotos}</strong> {quantidadeVotos > 1 ? 'vezes' : 'vez'}.</p>
      <Link to="/resultado">Ver Resultado</Link>
    </div>
  )
}

export default Msg
