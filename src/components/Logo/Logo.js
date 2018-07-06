import React from 'react';
import BurgerLogo from '../../assets/images/burger-logo.png';
import styles from './Logo.css';

const logo = () => (
    <div className={styles.Logo}>
        <img src = {BurgerLogo} alt ="My-Burger"/> 
    </div>

);

export default logo;