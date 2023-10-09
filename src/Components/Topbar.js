import React from 'react'
import classes from './Topbar.module.css'

const Topbar = () => {
  return (
    <header>
        <nav className={classes.Topbar}>
            <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='Amazon Logo'></img>
        </nav>
    </header>
   
  );
}

export default Topbar
