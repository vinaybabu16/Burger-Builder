import React from 'react';
import Aux from '../../hoc/Aux';
import layoutStyles from './Layout.css';

const layout = (props) => (
    <Aux>
        <div> toolbar, sidedrawer, backdrop </div>
        <main className = {layoutStyles.Content} >
            {props.children}
        </main>
    </Aux>
);

export default layout;