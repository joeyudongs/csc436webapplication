import React from 'react';

function Logout({user, dispatchUser}) {
    console.log("Logout fresh start")
    return (
        <form onSubmit={e => {e.preventDefault();dispatchUser({type: 'LOGOUT'});}}>
            Logged in as: <b>{user}</b>
            <input type="submit" value="Logout"/>
        </form>
    );
}

export default Logout;