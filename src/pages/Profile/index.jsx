import React from "react";

export default function Profile() {
  return (
    <div>
      <h1>Minha Conta</h1>

        <div className="details">
            <div className="qr"></div>
            <div className="name"></div>
            <div className="number"></div>
            <div className="random-container">
                <span className="code"></span>
                <div className="copy"></div>
            </div>
        </div>

      <ul>
        <li>
          <div className="head">Meu Número</div>
          <span>2348928</span>
        </li>
        <li>
          <div className="head">Meu Email</div>
          <span>nemtem@example.com</span>
        </li>
        <li>
          <div className="head">Nome de preferência</div>
          <span>2348928</span>
        </li>
        <li>
          <div className="head">Senha de 4 dígitos</div>
          <span>Utilizada para confirmar movimentações</span>
        </li>
      </ul>
    </div>
  );
}
