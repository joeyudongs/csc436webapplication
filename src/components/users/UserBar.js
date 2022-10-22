import React, { useState } from 'react';
import Logout from "./Logout";
import Register from "./Register";
import Login from './Login';

function UserBar({user, dispatchUser}) {
    console.log("UserBar freshstart")
    if (user) {
        console.log("UserBar if User")
        return <Logout user={user} dispatchUser={dispatchUser}/>;
    } else {
        console.log("UserBar else User")
        return (
            <div>
                <Login dispatchUser={dispatchUser} />
                <Register dispatchUser={dispatchUser} />
            </div>
        );
    }
}

export default UserBar;