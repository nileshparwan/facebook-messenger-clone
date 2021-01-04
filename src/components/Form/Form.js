import React from 'react';
import FooterData from './Form.json';
import './Form.css';

const Form = ({children,sendMessageCb}) => {       
    const { formData } = FooterData;
    return (
        <form>
            {children}
            <button type="submit" className="smiley__btn" aria-label="smiley button" aria-hidden="true"><i className={formData?.smiley}></i></button>
            <button onClick={sendMessageCb} type="button" className="submit__btn" aria-hidden="true" aria-label="submit button"><i className={formData?.submit}></i></button>
        </form>
    );
};

export default Form;
