import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Burger/Burger';
import BuildControls from '../../BurgerControls/BuildControls';

const PRICES = {
    cheese: .4,
    salad: .7,
    meat: 1.7,
    bacon: .5
}

class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        basePrice: 4
    }

    addIngredientHandler = (types) => {
        const updatedCount = this.state.ingredients[types] + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[types]= updatedCount;
        const newPrice = this.state.basePrice + PRICES[types];
        this.setState({
            basePrice: newPrice,
            ingredients: updatedIngredients
        });
    }

    removeIngredientHandler = (types) => {
        if(this.state.ingredients[types] <= 0)
                return;
        const updatedCount = this.state.ingredients[types] - 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[types]= updatedCount;
        const newPrice = this.state.basePrice - PRICES[types];
        this.setState({
            basePrice: newPrice,
            ingredients: updatedIngredients
        });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key] = (disabledInfo[key] <= 0);
        };
        
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdder = {this.addIngredientHandler}
                            ingredientRemover = {this.removeIngredientHandler}
                            disabled = {disabledInfo}
                            price = {this.state.basePrice}/>
            </Aux>
        )
    } 
}

export default BurgerBuilder;