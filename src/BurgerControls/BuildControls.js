import React from 'react';
import styles from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Bacon', types: 'bacon'},
    { label: 'Cheese', types: 'cheese'},
    { label: 'Meat', types: 'meat'},
    { label: 'Salad', types: 'salad'}
]

const buildControls = (props) => (
    <div className={styles.BuildControls}>
        <p> Current price: <strong>
                 {props.price.toFixed(2)} 
            </strong>
        </p>
        {controls.map(ctrl => (
            <BuildControl 
                key = {ctrl.label} 
                label={ctrl.label}
                adder = {() => props.ingredientAdder(ctrl.types)}
                remover = {() => props.ingredientRemover(ctrl.types)}
                disabled = {props.disabled[ctrl.types]}
            />
        ))}
    </div>
);

export default buildControls;