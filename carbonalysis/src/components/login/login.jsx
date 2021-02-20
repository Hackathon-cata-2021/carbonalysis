import React from 'react'

const login = () => {
    return(
        <div>
            <form>
                <label>Username / Email</label>
                <input type="text"></input>
                <label>Password</label>
                <input type="text"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default login