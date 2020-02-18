import React from "react";
import ProgressBar from "../../components/ProgressBar";

export default function Wallet() {
  return (
    <div>
      <h1>Minha Carteira</h1>

      <div className="bar">
        <span>Saldo em Conta</span>
        <div className="saldo">R$123980</div>
        <div className="eye"></div>

        <ProgressBar value={25} max={100} />
        {/* <Plot/> */}

        <button>Guardar Dinheiro</button>
        <button>Retirar</button>
        <button>pagar</button>
        <button>Depositar</button>
      </div>
    </div>
  );
}
