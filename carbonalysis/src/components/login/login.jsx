import React from 'react'

const login = () => {
    return(
        <div>
            <form>
                <label>Email</label>
                <input type="email"></input>
                <br/>
                <label>Password</label>
                <input type="password"></input>
                <br/>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default login