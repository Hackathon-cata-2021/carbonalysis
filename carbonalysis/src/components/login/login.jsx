import React, { useState, useContext } from 'react'
import { carbonFootprintContext } from '../../context/CarbonFootprintContext'

const Login = () => {
    const {user, setUser} = useContext(carbonFootprintContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onChangeHandler = (e, type) => {
        if (type == 'password') {
            setPassword(prevPassword => prevPassword = e.target.value);
        } else {
            setEmail(prevEmail => prevEmail = e.target.value);
        }
    }
    const submitHandler = (e) => {
        e.preventDefault();
    }
    return(
        <div>
            <form>
                <label>Email</label>
                <input value={email} onChange = {(e) => onChangeHandler(e, "email")} type="email"></input>
                <br/>
                <label>Password</label>
                <input value={password} onChange = {(e) => onChangeHandler(e, "password")} type="password"></input>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login