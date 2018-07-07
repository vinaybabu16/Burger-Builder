import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import layoutStyles from './Layout.css';
import Toolbar from './../Navigation/Toolbar/Toolbar';
import SideDrawer from './../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state = {
        showSideDrawer: false
    }

    disableSideDrawerHandler = () => {
        this.setState({showSideDrawer: false})
    }

    showSideDrawerHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        })
    }

    render() {
        return(
        <Aux>
            <Toolbar click = {this.showSideDrawerHandler} />
            <SideDrawer open = {this.state.showSideDrawer} closed = {this.disableSideDrawerHandler} />
            <main className = {layoutStyles.Content} >
                {this.props.children}
            </main>
        </Aux>
        );
    }
} 

export default Layout;