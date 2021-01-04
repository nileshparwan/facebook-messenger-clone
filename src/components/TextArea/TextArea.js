import React from 'react';
import './TextArea.css';
import FooterData from './Form.json';

function TextArea(props) {
    const { formData } = FooterData;
    
    return (
        <div  className="form-group text-area">
            <textarea className="form-control" garia-label="textbox" placeholder={formData?.placeholder} {...props}>{props?.value || ""}</textarea>
            <div className="online" />
        </div>
    );
}

export default TextArea;
