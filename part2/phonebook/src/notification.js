import React from 'react'
import './notification.css'

export const Notification = ({msg}) => {
    if (msg === ''){
        return null
    }
    return(
        <div className="success">
            {msg}
        </div>
    )
}