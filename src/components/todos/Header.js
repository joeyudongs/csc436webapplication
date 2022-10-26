import React, {useContext} from 'react';
import {ThemeContext} from '../hooks/Contexts'

const Header = ({text}) => {
    console.log("In todos Header")
    const theme = useContext(ThemeContext)
    return <h1 style={{color: theme.primaryColor}}>{text}</h1>
}

export default Header