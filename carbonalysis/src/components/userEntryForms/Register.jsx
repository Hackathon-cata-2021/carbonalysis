import React from 'react';
import styles from './userEntryFormsStyling.module.css'
import BackgroundImage from './userEntryFormsBackgroundImage.png'

const register = () => {
    return(
        <div className = {styles.body} style={{backgroundImage: `url(${BackgroundImage})`}}>
            <form className = {styles.formCard}>
                <h1>Sign Up <u>FREE</u> Today!</h1>
                <div className={styles.column}>
                    <input type="text" placeholder="First name"></input> <br/>
                    <input type="text" placeholder="Last name"></input> <br/>
                    <input type="email" placeholder="Email"></input> <br/>
                    <input type="password" placeholder="Password"></input> <br/>
                    <input type="password" placeholder="Confirm password"></input>
                </div>
                <div className={styles.column}>
                    <input type="text" placeholder="Street Address"></input> <br/>
                    <input type="text" placeholder="City"></input> <br/>
                    <input type="text" placeholder="State"></input> <br/>
                    <input type="text" placeholder="Zip Code"></input> <br/>
                    <input type="text" placeholder="Country"></input>
                </div>
                <button>Sign Up!</button>
            </form>
        </div>
    )
};

export default register;

