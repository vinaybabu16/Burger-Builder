import React from 'react';
import styles from './Toolbar.css';
import Logo from './../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawToggle from '../SideDrawer/DrawToggle/DrawToggle';

const toolbar = (props) => (
    <header className = {styles.Toolbar}>
        <DrawToggle clicked = {props.click} />
        <div className={styles.Logo}>
            <Logo />
        </div>
        <nav className={styles.DesktopOnly}> 
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;