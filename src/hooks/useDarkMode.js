import React from 'react';
import {useLocalStorage} from './useLocalStorage';


export const darkMode =(key, initialValues)=> { [darkMode, setDarkMode] = useLocalStorage(false);
const body = document.getElementsByTagName(body);
if(darkMode === true){
body.className = "dark-mode";
}
else if(darkMode === false){
    body.className = "";
}
}