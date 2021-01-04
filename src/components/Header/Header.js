import React from 'react';
import Profile from '../Profile/Profile';
import { headerButtons } from './Header.json';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import FeatureOptions from '../FeatureOptions/FeatureOptions';
import './Header.css';


function Header({username}) {
    const headerRef = React.createRef();
    const ProfileHandler = () => {
        const headerElem = headerRef?.current;
        const profileMenu = headerElem.querySelector('.header__profileMenu');
        if (!profileMenu.classList.contains('show')) return profileMenu.classList.add('show');
        if (profileMenu.classList.contains('show')) return profileMenu.classList.remove('show');
        return;
    };
    return (
        <>
            <header className="header" ref={headerRef}>
                <ProfileMenu className="header__profileMenu" />
                <div className="header__row">
                    <Profile username={username} profileHandler={ProfileHandler} />
                    <FeatureOptions className="featureOptionsCustom" options={headerButtons} />
                </div>
            </header>
        </>
    );
}

export default Header;
