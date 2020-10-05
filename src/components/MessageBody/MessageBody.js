import React from 'react';
import './MessageBody.css';

function MessageBody({ children, className }) {
    return (
        <div className={`messageBody ${className || ""}`}>
            {children}
        </div>
    );
}

export default MessageBody;
