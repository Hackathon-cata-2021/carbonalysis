import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { carbonFootprintContext } from '../../context/CarbonFootprintContext'

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

        HttpHelper('/login', 'POST', credentials)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Invalid username or password');
            })
            .then((data) => {
                sessionStorage.setItem('token', data.token);
                setUser(data);
                history.push('/dashboard');
            })
            .catch(() => {
                setInvalidCredentials(true);
            })
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <label>Email</label>
                <input value={credentials.username} onChange = {(e) => onChangeHandler(e, "username")} type="email"></input>
                <br/>
                <label>Password</label>
                <input value={credentials.password} onChange = {(e) => onChangeHandler(e, "password")} type="password"></input>
                <br/>
                <button type="submit">Submit</button>
            </form>
            {invalidCredentials && <p>Invalid username or password</p>}
        </div>
    )
}

export default Login