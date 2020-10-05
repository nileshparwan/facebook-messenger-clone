import React from 'react';
import './FeatureOptions.css';

function FeatureOptions({ options, className }) {
    return (
        <div className={`featureOptions ${className || ""}`}>
            {
                options.map((icon, index) => (
                    <button key={index} aria-label={icon.title}>
                        <i className={`${icon.icon}`} aria-hidden="true"></i>
                    </button>
                ))
            }
        </div>
    );
}

export default FeatureOptions;
