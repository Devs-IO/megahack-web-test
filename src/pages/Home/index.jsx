import React from "react";
import Card from "../../components/Card";
import "./styles.scss";

export default function Home({ history }) {
  return (
    <div className="home">
      ehnois
      <div className="header">
        <h2>Olá, quer pagar como?</h2>

        <div className="foto">[espaço pra foto]</div>
      </div>
      <div className="saldo-container">
        <div>Saldo em conta</div>
        <div>R$1500,62</div>
        <button>eye icon</button>
        {/* progress bar */}

        <button onClick={() => {}}>Guardar</button>
        <button onClick={() => {}}>Retirar</button>
        <button onClick={() => history.push("/pay")}>Pagar</button>
        <button onClick={() => {}}>Minha Carteira</button>
      </div>
      <div className="cards-container">
        <div>Meus Cartões</div>
        <Card type="visa" end="1238" limit={500} />
        <Card type="master" end="4658" limit={200} />
      </div>
      <button>Depositar</button>
      <button>Pagar</button>
      <button>Despesas</button>
      <button>Registros</button>
    </div>
  );
}
