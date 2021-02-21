import React from 'react';
import styles from './userEntryFormsStyling.module.css'
import BackgroundImage from './userEntryFormsBackgroundImage.png'

const register = () => {
    return(
        <div className = {styles.body} style={{backgroundImage: `url(${BackgroundImage})`}}>
            <form className = {styles.formCard}>
                <h1>Sign Up <u>FREE</u> Today!</h1>
                <div className={styles.column}>
                    <input placeholder="First name"></input> <br/>
                    <input placeholder="Last name"></input> <br/>
                    <input placeholder="Email"></input> <br/>
                    <input placeholder="Password"></input> <br/>
                    <input placeholder="Confirm password"></input>
                </div>
                <div className={styles.column}>
                    <input placeholder="Street Address"></input> <br/>
                    <input placeholder="City"></input> <br/>
                    <input placeholder="State"></input> <br/>
                    <input placeholder="Zip Code"></input> <br/>
                    <input placeholder="Country"></input>
                </div>
                <button>Sign Up!</button>
            </form>
        </div>
    )
};

export default register;

