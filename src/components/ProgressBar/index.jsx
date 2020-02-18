import React from 'react'
import './styles.scss'

export default function ProgressBar({total, current}) {
    return (
        <div className="progressBar">
            <progress value={current} max={total}/>
        </div>
    )
}
