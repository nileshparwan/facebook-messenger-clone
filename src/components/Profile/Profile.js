import React from 'react';
import './Profile.css';

function Profile({ profileHandler }) {
    const DownArrow = (
        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" version="1.1">
            <g id="surface1">
                <path d="M 12.773438 5.664062 C 13.140625 5.296875 13.140625 4.699219 12.773438 4.335938 L 12.769531 4.328125 C 12.402344 3.964844 11.804688 3.964844 11.4375 4.328125 L 7.492188 8.273438 L 3.550781 4.328125 C 3.183594 3.964844 2.585938 3.964844 2.21875 4.328125 L 2.214844 4.335938 C 1.847656 4.699219 1.847656 5.296875 2.214844 5.664062 L 7.492188 10.945312 Z M 12.773438 5.664062 " />
            </g>
        </svg>

    );
    return (
        <button className="profile" onClick={() => profileHandler ? profileHandler() : {}}>
            <div className="profile_imageContainer">
                <img
                    src="https://via.placeholder.com/150"
                    alt="profile_image"
                />
            </div>

            <div className="profile__desc">
                <div className="profile__info">
                    <h4>Test User</h4>
                    {DownArrow}
                </div>
                <p>Active now</p>
            </div>

            <div className="profile__active" />
        </button>
    );
}

export default Profile;
