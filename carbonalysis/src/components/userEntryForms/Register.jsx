import React from 'react';
import styles from './userEntryFormsStyling.module.css'
import BackgroundImage from './userEntryFormsBackgroundImage.png'

const register = () => {
    return(
        <div className = {styles.formBody} style={{backgroundImage: `url(${BackgroundImage})`}}>
            <form className = {styles.formCard}>
                <h1>Sign Up <u>FREE</u> Today!</h1>
                <div className={styles.column}>
                    <input className={styles.formInput} type="text" placeholder="First name"></input> <br/>
                    <input className={styles.formInput} type="text" placeholder="Last name"></input> <br/>
                    <input className={styles.formInput} type="email" placeholder="Email"></input> <br/>
                    <input className={styles.formInput} type="password" placeholder="Password"></input> <br/>
                    <input className={styles.formInput} type="password" placeholder="Confirm password"></input>
                </div>
                <div className={styles.column}>
                    <input className={styles.formInput} type="text" placeholder="Street Address"></input> <br/>
                    <input className={styles.formInput} type="text" placeholder="City"></input> <br/>
                    <input className={styles.formInput} type="text" placeholder="State"></input> <br/>
                    <input className={styles.formInput} type="text" placeholder="Zip Code"></input> <br/>
                    <input className={styles.formInput} type="text" placeholder="Country"></input>
                </div>
                <button className={styles.formButton} >Sign Up!</button>
            </form>
        </div>
    )
};

export default register;

