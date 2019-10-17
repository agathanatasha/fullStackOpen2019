import React from 'react'
import './notification.css'

export const Notification = ({state, msg}) => {
    if (msg === ''){
        return null
    }
    return(
        <div className={state}>
            {msg}
        </div>
    )
}