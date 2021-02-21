import React from 'react';
import styles from './Logout.module.css';
import Background from './logoutImage.png'

const Logout = () => {
    return(
        <div className = {styles.logoutBody} style = {{backgroundImage: `url(${Background})`}}>
            <div className = {styles.logoutContainer} >
                <h1 className = {styles.logoutHeading} >You have successfully logged out.</h1>
                <p className = {styles.logoutDescription} >Stay safe and be conscious of your impact on the environment!</p>
            </div>
        </div>
    )
}

export default Logout;