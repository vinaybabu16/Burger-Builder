import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../Burger/Burger';

class BurgerBuilder extends Component{
    render() {
        return(
            <Aux>
                < Burger />
                <p> Build Controls </p>
            </Aux>
        )
    } 
}

export default BurgerBuilder;