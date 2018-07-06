import React from 'react';
import Aux from '../../hoc/Aux';
import layoutStyles from './Layout.css';
import Toolbar from './../Navigation/Toolbar/Toolbar';
import SideDrawer from './../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawer/>
        <main className = {layoutStyles.Content} >
            {props.children}
        </main>
    </Aux>
);

export default layout;