import { Card, CardContent, Typography } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Message.css'

const Message = forwardRef(({ username, message }, ref) => {
    const isUser = username === message.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? 'message__usercard' : 'message_guestcard'}>
                <CardContent>
                    <Typography
                        color='white'
                        variant="h5"
                        component="h2"
                    >
                        <b>{!isUser && `${message.username || 'Unknown User'} : `}</b> {message.message}
                    </Typography>
                </CardContent>
            </Card>

        </div>
    )
})

export default Message