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
        {controls.map(ctrl => (
            <BuildControl key = {ctrl.label} label={ctrl.label}/>
        ))}
    </div>
);

export default buildControls;