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

function Message({ message, user = USERTYPE.CURRENT, position = POSITION.RIGHT, className }) {
    return message ? (
        <div className={`message ${user} ${position} `}>
            <FeatureOptions className="message_featureOptions" options={MessageOtions?.options} />
            <span tabIndex={0} className={`messageText ${user} ${className || ""} `} dangerouslySetInnerHTML={{ __html: `${message} ` }} />
        </div>
    ) : <></>;
}

export default Message;;;;;
