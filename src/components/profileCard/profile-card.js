import React from 'react';
import './profile-card.scss';
import ProgressLine from '../progressLine/progress-line';

const ProfileCard = () => {
    let leaves = 10;
    return (
        <div className="profile-card">
            <div className="profile-image">
                 <img src="https://toppng.com/uploads/preview/businesswoman-blank-profile-picture-female-11563049297axzpapjulw.png" alt="profile" />
            </div>
            <div className="info-container">
                <div className="info">
                    <span className="name-info">Nazma Biwi</span>
                    <span className="sub-info">chefkart</span>
                </div>
                <div className="details">
                    <div className="flex flex-btw fs12">
                        <span>
                            Total Leaves
                        </span>
                        <span className="leave-color">02</span>
                    </div>
                    <span>
                        <ProgressLine percent={leaves}/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;