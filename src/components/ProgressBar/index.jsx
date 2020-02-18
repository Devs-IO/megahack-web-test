import React from 'react'
import './styles.scss'

export default function ProgressBar(props) {
    return (
        <div className="progressBar">
            <progress {...props}/>
        </div>
    )
}
