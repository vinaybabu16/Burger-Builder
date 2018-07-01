import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import BurgerStyles from './Burger.css'

const Burger = (props) => {
    
    let ingredientArray = Object.keys(props.ingredients)
        .map( igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i) => {
               return <BurgerIngredients key = {igKey + i} types = {igKey} />
            });
        }).reduce((accumulator, currentValue) => 
            (accumulator.concat(currentValue)), []);
   
    if(ingredientArray.length === 0){
        ingredientArray = <p>Please start adding Ingredients!</p>
    }
return(
    <div className = {BurgerStyles.Burger}>
        <BurgerIngredients types = 'bread-top' />
        {ingredientArray}
        <BurgerIngredients types = 'bread-bottom' />
    </div>

    );
}

export default Burger;