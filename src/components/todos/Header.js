import React, {useContext} from 'react';
import {ThemeContext} from '../hooks/Contexts'

console.log("In todos Header")
const Header = ({text}) => {
    const theme = useContext(ThemeContext)
    return <h1 style={{color: theme.primaryColor}}>{text}</h1>
}

export default Header