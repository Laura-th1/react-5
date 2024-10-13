import React from 'react';
import '../Styles/ProfileCard.css';
import img from '../Assets/Perfill.jpg';


const ProfileCard = ({ name, description }) => {
    return (
        <div className='profile-card'>

            <img className='profile-img' src={img} alt={name} />
            <h3 className='profile-name'>{name}</h3>
            <p className='profile-description'>{description}</p>
        </div>
    );
}
export default ProfileCard;