import React from "react";
import Card from "../../components/Card";
import ProgressBar from "../../components/ProgressBar";
import foto from '../../assets/foto.png'
import "./styles.scss";

export default function Home({ history }) {
  return (
    <div className="home">
      <div className="header">
        <h2>Olá, André. Qual conta pagar hoje?</h2>

        <div className="foto"><img src={foto} alt="aaa"/></div>
      </div>
      
      <div className="saldo-container">
        <div>Saldo em conta</div>
        <div className="infos">
        <div className="saldo">R$1500,62</div>
        <button className="eye" />
        </div>
        
        <ProgressBar value={100} max={500} />

        <div className="buttons">
          <button onClick={() => {}}>Guardar</button>
          <button onClick={() => {}}>Retirar</button>
          <button onClick={() => history.push("/pay")}>Pagar</button>
          <button onClick={() => {}}>Minha Carteira</button>
        </div>
      </div>
      <div className="my-cards">
        <div>Meus Cartões</div>
        <div className="cards-container">
          <Card type="visa" end="1238" limit={500} />
          <Card type="master" end="4658" limit={200} />
        </div>
      </div>
      <div className="bottom-buttons">
        <button>Depositar</button>
        <button>Pagar</button>
        <button>Despesas</button>
        <button>Registros</button>
      </div>
    </div>
  );
}
