import React from 'react';
import Profile from '../Profile/Profile';
import { headerButtons } from './Header.json';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header__row">
                <Profile />
                <div className="header__btns">
                    {
                        headerButtons.reverse().map((icon, index) => (
                            <button key={index} aria-label={icon.split("-")[1]}>
                                <i className={`${icon}`}></i>
                            </button>
                        ))
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;
