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
        basePrice: 4,
        buyable: false
    }
    updateBuyableHandler = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igkey => {
                return ingredients[igkey];
            }).reduce((accumulator, curValue)=>{
                return accumulator + curValue;
            },0  );
        this.setState({buyable: sum > 0})

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
        this.updateBuyableHandler(updatedIngredients);
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
        this.updateBuyableHandler(updatedIngredients);
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
                            price = {this.state.basePrice}
                            buyable = {this.state.buyable}/>
            </Aux>
        )
    } 
}

export default BurgerBuilder;