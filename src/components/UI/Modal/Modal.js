import React, {Component} from 'react';
import styles from './Modal.css';
import Aux from '../../../hoc/Auxilary'
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.buying !== this.props.buying || nextProps.children !== this.props.children;
    }
    render(){
       
        return(
            <Aux>
                 <Backdrop show = {this.props.buying} clicked = {this.props.clicked}> </Backdrop>
                 <div className = {styles.Modal}
                     style = {{
                     transform : this.props.buying ? 'translateY(0)' : 'translateY(-100vh)',
                     opacity : this.props.buying ? 1: 0
                     }}>
                    {this.props.children}
                 </div>
           </Aux>
        );
    }
}


export default Modal;