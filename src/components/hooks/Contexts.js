import React from 'react';
console.log("In hooks Contexts.js")

export const ThemeContext = React.createContext({
primaryColor: 'deepskyblue',
secondaryColor: 'coral'
})

export const StateContext = React.createContext({
    state: {},
    dispatch: () => {}
})