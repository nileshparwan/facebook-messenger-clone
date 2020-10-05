import React from 'react';
import './ProfileMenu.css';
import { data } from './ProfileMenu.json';

function ProfileMenu({ className }) {
    return (
        <div className={`profileMenu ${className}`}>
            <div className="profileMenu__row">
                <div className="profileMenu__arrow" />

                <ul className="profileMenu__list">
                    {
                        data.map((lists, index) => (
                            <li key={index}>
                                <ul>
                                    {
                                        lists.map((list, key) => (
                                            <li key={key}>
                                                <a href={list.url !== null ? list.url : "#"}>
                                                    <div className="icon">
                                                        {list.icon !== "" && (<i className={list.icon}> </i>)}
                                                    </div>

                                                    <div className="profileMenu_desc">
                                                        <h5>{list.title}</h5>
                                                        {list.subtitle !== "" && (<small>{list.subtitle}</small>)}
                                                    </div>
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                        ))
                    }
                </ul >

            </div>
        </div >
    );
}

export default ProfileMenu;
