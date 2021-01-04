import React from 'react';
import FeatureOptions from '../FeatureOptions/FeatureOptions';
import { MessageOtions } from './Message.json';
import './Message.css';

export const USERTYPE = {
    CURRENT: "current",
    NEXTCURRENT: "nextCurrent"
};

export const POSITION = {
    LEFT: "left",
    RIGHT: "right"
};

const Message = React.forwardRef(({ message, username, user = USERTYPE.CURRENT, position = POSITION.RIGHT, className }, ref) => {
    return(
        <div ref={ref} className={`message ${user} ${position} `}>
            <FeatureOptions className="message_featureOptions" options={MessageOtions?.options} />
            <div className="userMessage">
                {(username && position == "left") && <small>{username}</small>}
                <span tabIndex={0} className={`messageText ${user} ${className || ""} `} dangerouslySetInnerHTML={{ __html: `${message} ` }} />
            </div>
        </div>
    )
})

export default Message;;;;;
