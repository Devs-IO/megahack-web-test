import React from 'react'

export default function Wallet() {
    return (
        <div>
            <h1>Minha Carteira</h1>

            <div className="bar">
                <span>Saldo em Conta</span>
                <div className="saldo">R$123980</div>
                <div className="eye"></div>

                {/* <ProgressBar/> */}
                {/* <Plot/> */}

                <button>Guardar Dinheiro</button>
                <button>Retirar</button>
                <button>pagar</button>
                <button>Depositar</button>
            </div>

        </div>
    )
}
