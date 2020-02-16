import React from 'react'
import './styles.css'
import visa from '../../assets/cards/visa.png'
import master from '../../assets/cards/mastercard.svg'
import eye from '../../assets/icons/olho.svg'

export default function Card({type, end, limit}) {
    return (
        <div className="card">
            {/* cartã1 {type} */}
            <img className="cardtype" src={master} alt="visa"/>
            <img className="eye" src={eye} alt="mas olha la"/>
            <div className="cardtext">
            **** **** **** {end}
            </div>

            {/* tem R${limit} aqui */}
        </div>
    )
}
