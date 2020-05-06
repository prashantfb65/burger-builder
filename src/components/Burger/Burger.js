import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="cutlet"/>
            <BurgerIngredient type="tomato"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;