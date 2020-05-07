import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux';

const modal = (props) => (
    // <div className={classes.Modal} 
    //     style={{
    //         transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
    //         opacity: props.show ? '1': '0'
    // }}> 
    //     {props.children}
    // </div>

    <Aux>
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;