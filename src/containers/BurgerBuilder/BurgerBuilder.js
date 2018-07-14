import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../Burger/Burger';
import BuildControls from '../../Burger/BurgerControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const PRICES = {
    cheese: .4,
    salad: .7,
    meat: 1.7,
    bacon: .5
}

class BurgerBuilder extends Component{
    state = {
        ingredients: null,
        basePrice: 5.7,
        buyable: false,
        buying: false,
        loading: false,
        error: false
    }
    componentDidMount() {
        axios.get('https://burger-builder-5649f.firebaseio.com/ingredients.json')
            .then(res => {
                this.setState({ingredients:  res.data});
            })
            .catch(error => {
                this.setState({error: true});
            });
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
    buyingHandler = () => {
        this.setState({buying: true});
    }
   
    continueHandler = () => {
        //alert('Clicked on continue');
        this.setState({loading: true});
       
        
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.basePrice,
            customer: {
                Name: 'Vinay',
                email: 'test@test.com',
                address:{
                    street: 'Test street',
                    zipcode: '34123',
                    state: 'TX'
                },
                deliveryInstructions: 'ASAP'

            }
        }
        axios.post('/orders.json',order)
             .then(response => {this.setState({loading: false, buying: false})})
             .catch(error => {this.setState({loading: false, buying: false})});
        
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
    hideModalHandler= () => {
        this.setState({buying: false});
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
        let burger = this.state.error ? <p><strong> Sorry! Ingredients couldn't be Loaded </strong></p>: <Spinner />;
        let orderSummary = null;
        if(this.state.ingredients){
            burger = (
                <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdder = {this.addIngredientHandler}
                            ingredientRemover = {this.removeIngredientHandler}
                            disabled = {disabledInfo}
                            price = {this.state.basePrice}
                            buying = {this.buyingHandler}                        
                            buyable = {this.state.buyable}/>
                </Aux>
            );
            orderSummary = (
                <OrderSummary ingredients = {this.state.ingredients}
                cancelClicked = {this.hideModalHandler} 
                continueClicked = {this.continueHandler}
                price = {this.state.basePrice}/>
            );
        }
        if(this.state.loading){
            orderSummary = <Spinner />
        } 
        return(
            <Aux>
                <Modal buying = {this.state.buying} clicked={this.hideModalHandler}>
                   {orderSummary}
                </Modal>
                   {burger}
                
            </Aux>
        )
    } 
}

export default withErrorHandler(BurgerBuilder, axios);