import React from 'react';
import styles from '../Styles/Card.module.css';
import img from '../Assets/E4.png';

const Card = ({ title, description }) => {
    return (
        <div className={styles.container}>
            <h1>  &nbsp; Taller React 5 </h1>
            <h3> &nbsp; 3. CSS Modules</h3>
            <div className={styles.card}>
                <img src={img} alt={title} className={styles.image} />
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <button className={styles.button}>Ver</button>
            </div>
        </div>
    );
};

export default Card;