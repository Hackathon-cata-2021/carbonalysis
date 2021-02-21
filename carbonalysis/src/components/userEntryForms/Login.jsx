import axios from 'axios';
import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { carbonFootprintContext } from '../../context/CarbonFootprintContext';
import HttpHelper from '../../utils/HttpHelper';
import styles from './userEntryFormsStyling.module.css'
import BackgroundImage from './userEntryFormsBackgroundImage.png'

const Login = () => {
    const {user, setUser} = useContext(carbonFootprintContext);

    const [credentials, setCredentials] = useState({ username: '', password: ''});
    const [invalidCredentials, setInvalidCredentials] = useState(false);

    const history = useHistory();

    const onChangeHandler = (event, input) => {
        if (invalidCredentials) {
            setInvalidCredentials(false);
          }
          setCredentials({ ...credentials, [input]: event.target.value });
    }

    const submitHandler = (e) => {
        e.preventDefault();

        axios
        .post('http://localhost:8080/login', {
            username: credentials.username,
            password: credentials.password
        })
        .then((response) => {
            sessionStorage.setItem('token', response.data.jwt);
            setUser(response.data.user);
            history.push('/carbon-footprint');
        })
        .catch(() => {
            setInvalidCredentials(true);
        })
    }
    

    return(
        <div className={styles.formBody} style={{backgroundImage: `url(${BackgroundImage})`}}>
            <form className={styles.formCard}onSubmit={submitHandler}>
                <h1 className={styles.formHeading} >Login</h1>
                <input className={styles.formInput} placeholder="Username" value={credentials.username} onChange = {(e) => onChangeHandler(e, "username")} type="email"></input> <br/>
                <input className={styles.formInput} placeholder="Password" value={credentials.password} onChange = {(e) => onChangeHandler(e, "password")} type="password"></input>
                <button className={styles.formButton} type="submit">Submit</button>
            </form>
            {invalidCredentials && <p>Invalid username or password</p>}
        </div>
    )
}

export default Login;
