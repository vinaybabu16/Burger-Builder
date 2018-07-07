import React from 'react';
import styles from './DrawToggle.css';
const drawToggle = (props) => (
    <div className ={styles.DrawToggle} onClick = {props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>

);

export default drawToggle;