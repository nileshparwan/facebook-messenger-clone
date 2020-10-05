import React from 'react';
import FooterData from './Footer.json';
import './Footer.css';
import FeatureOptions from '../FeatureOptions/FeatureOptions';

function Footer() {
    const footerRef = React.createRef();
    const [message, setMessage] = React.useState('');
    const { options, likeBtn, formData } = FooterData?.footer;

    const MessageHandler = (event) => {
        event.preventDefault();
        const footer = footerRef?.current;
        const form = footer.querySelector('form');
        const likeBtn = footer.querySelector('.footer__likeBtn');
        setMessage(event.target.value);
        if (event.target.value.length > 0) {
            !form.classList.contains('inc_width') && form.classList.add('inc__width');
            !likeBtn.classList.contains('hidden') && likeBtn.classList.add('hidden');
            return;
        }
        !form.classList.contains('inc_width') && form.classList.remove('inc__width');
        likeBtn.classList.contains('hidden') && likeBtn.classList.remove('hidden');
        return;
    };
    return (
        <div className="footer" ref={footerRef}>
            <div className="footer__row">
                <FeatureOptions className="footer__customFeatureOptions" options={options} />

                <form>
                    <textarea value={message} aria-label="textbox" placeholder={formData?.placeholder} onChange={MessageHandler}></textarea>
                    <button type="button" className="smiley__btn" aria-label="smiley button" aria-hidden="true"><i className={formData?.smiley}></i></button>
                    <button type="submit" className="submit__btn" aria-hidden="true" aria-label="submit button"><i className={formData?.submit}></i></button>
                    <div className="online"/>
                </form>

                <button className="footer__likeBtn" aria-hidden="true" aria-label="like button">
                    <i className={likeBtn}></i>
                </button>
            </div>
        </div>
    );
}

export default Footer;
