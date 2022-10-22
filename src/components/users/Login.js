import React, {useState} from 'react';

function Login({dispatchUser}) {
    console.log("Login freshstart")
    const [username, setUsername] = useState('');
    console.log("username: " + username)
    function handleUsername(evt) {
        console.log("In handleUsername")
        console.log("evt.target.value: " + evt.target.value)
        setUsername(evt.target.value);
    }
    return (
        <form onSubmit={e => {e.preventDefault();dispatchUser({type: 'LOGIN', username});}}>
            <label htmlFor="login-username">Username:</label>
            <input type="text" value={username} onChange={handleUsername} name="login-username" id="login-username"/>
            <label htmlFor="login-password">Password:</label>
            <input type="password" name="login-password" id="login-password"/>
            <input type="submit" value="Login"/>
        </form>
    );
}
export default Login;