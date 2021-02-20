import React, {useContext} from 'react'
import { CarbonFootprintContext } from '../../context/CarbonFootprintContext'

const Login = () => {
    const {user, setUser} = useContext(CarbonFootprintContext);
    const submitHandler = () => {
        
    }
    return(
        <div>
            <form>
                <label>Email</label>
                <input type="email"></input>
                <br/>
                <label>Password</label>
                <input type="password"></input>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login