import React from 'react';
import styles from './Homepage.module.css'
import Background from './homepageImage.png'
import HomepageButton from './homepageButton/HomepageButton'
import { useHistory } from 'react-router-dom';

const Homepage = () => {

    let history = useHistory();

    const onClickRedirect = () => {
        history.push('/register')
    }

    return (
        <div className = {styles.body} style = {{backgroundImage: `url(${Background})`}}>
            <div className = {styles.container} >
                <h1 className = {styles.tagline} >Track Your Carbon Footprint</h1>
                <p className = {styles.description} >Carbonalysis tracks your carbon footprint by answering a few simple questions!</p>
                <ul className = {styles.unorderedList}>
                    <li>Track your footprint overtime!</li>
                    <li>Get listed on the global leaderboards!</li>
                    <li>Save your footprint progress!</li>
                </ul>
                <HomepageButton buttonText="Register!" onClick={onClickRedirect}/>
            </div>
        </div>
    )
}

export default Homepage;