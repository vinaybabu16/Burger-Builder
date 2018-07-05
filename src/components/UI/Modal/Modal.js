import React from 'react';
import styles from './Modal.css';
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) =>(
    <Aux>
    <Backdrop show = {props.buying} clicked = {props.clicked}> </Backdrop>
    <div className = {styles.Modal}
         style = {{
             transform : props.buying ? 'translateY(0)' : 'translateY(-100vh)',
             opacity : props.buying ? 1: 0
         }}>
        {props.children}
    </div>
    </Aux>
);

export default modal;