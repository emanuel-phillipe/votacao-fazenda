import { listarForaDaRoca, listarNaRoca, obterVotos, registrarVoto } from '../services/votacaoService';
import ParticipanteCard from '../components/ParticipanteCard';
import Msg from '../components/Msg';
import { useState } from 'react';

function Votacao() {
  const naRoca = listarNaRoca();
  const foraDaRoca = listarForaDaRoca();

  const [msg, setMsg] = useState(false);
  const [ultimoVoto, setUltimoVoto] = useState(null);
  const [votosNaSessao, setVotosNaSessao] = useState(0);

  const handleVoto = (participante) => {

    setUltimoVoto(participante.id);

    registrarVoto(participante.id);
    setVotosNaSessao(votosNaSessao + 1);

    setMsg({ participanteNome: participante.nome, quantidadeVotos: votosNaSessao + 1 });
  };

  return (
    <main className="home">
      <h1>Quem você quer eliminar?</h1>
      <p>Cada clique conta um voto para tiar o peão da fazenda.</p>

      {
        msg && <Msg participanteNome={msg.participanteNome} quantidadeVotos={msg.quantidadeVotos} />
      }

      <ul className="votacao-roca-lista">
        {naRoca.map((p) => (
          <li key={p.id}>
            <ParticipanteCard participante={p} onVotar={(p) => handleVoto(p)} />
          </li>
        ))}
      </ul>

      <h2>Demais peões</h2>
      <p>Fora da roça nesta semana, não podem receber votos.</p>

      <ul className="votacao-naoroca-lista">
        {foraDaRoca.map((p) => (
          <li key={p.id}>
            <ParticipanteCard participante={p} onVotar={undefined} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Votacao;
