import React from 'react';
import Aux from './../../hoc/Aux';
import Button from './../../components/UI/Button/Button';
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
                                .map(igKey => 
                                 (<li key={igKey}>
                                     <span style={{textTransform: 'capitalize'}}> {igKey} </span>
                                     : {props.ingredients[igKey]}

                                  </li>))
                                
    return(
        <Aux>
            <h3> Your Order </h3>
            <p> Please review the burger you ordered: </p>
            {ingredientSummary}
            <p><strong>Total price: ${props.price.toFixed(2)} </strong> </p>
            <p> Continue to checkout? </p>
            
            <Button clicked={props.cancelClicked} buttonType="Danger">CANCEL</Button>
            <Button clicked={props.continueClicked} buttonType="Success">CONTINUE</Button>
            
        </Aux>

    );
};

export default orderSummary;