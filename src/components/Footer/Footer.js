import React from 'react';
import FooterData from './Footer.json';
import './Footer.css';
import FeatureOptions from '../FeatureOptions/FeatureOptions';

function Footer({children}) {    
    const { options, likeBtn } = FooterData?.footer;

    return (
        <div className="footer">
            <div className="footer__row">
                <FeatureOptions className="footer__customFeatureOptions" options={options} />
                {children}
                <button className="footer__likeBtn" aria-hidden="true" aria-label="like button">
                    <i className={likeBtn}></i>
                </button>
            </div>
        </div>
    );
}

export default Footer;
