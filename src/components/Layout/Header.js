import React from 'react';
import  mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCurtButton from './HeaderCurtButton';

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>OrderFood</h1>
                <HeaderCurtButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="delicious food" />
            </div>
        </>
    )
}

export default Header;
