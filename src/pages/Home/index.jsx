import React from 'react'
import Card from '../../components/Card'
import './styles.scss'

export default function Home() {
    return (
        <div className="home">
            ehnois

            <div className="header">

            </div>

            <Card type="visa" end="1238" limit={500}/>
            <br/>
            <Card type="master" end="4658" limit={200}/>
        </div>
    )
}
