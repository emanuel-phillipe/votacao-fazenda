import { useState } from "react";
import { calcularResultado, calcularTotalVotos, obterVotos, zerarVotos } from "../services/votacaoService";
import { Link } from "react-router-dom";

function Resultado() {

  const [votos, setVotos] = useState(() => obterVotos());

  const total = calcularTotalVotos(votos)
  const resultado = calcularResultado(votos)

  const handleZerar = () => {
    if (window.confirm("Apagar todos os votos?")) {
      zerarVotos()
      setVotos({})
    }
  };

  return (
    <main className="home">

      {
        total > 0 ? (
          <div>
            <h1>Parcial da Eliminação</h1>
            <div style={{ display: "flex", gap: "0.2rem" }}>
              <h1>{total}</h1><p>votos computados</p>
            </div>

            {resultado.map((item, index) => (
              <div key={index}>
                <img src={item.foto} />
                <h3>{item.nome}</h3>
                <p>{item.votos} votos ({item.percentual.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}%)</p>
              </div>
            ))}

            <button onClick={handleZerar}>Zerar Votação</button>
          </div>
        ) : (
            <div>
              <h1>Nenhum voto computado.</h1>
              <Link to="/votacao">Votar</Link>
            </div>
        )
      }

    </main>
  );
}

export default Resultado;
