import { useState } from "react";
export const useLocalStorage = (key, value) => {

    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : value;
    });

    const setValue = val => {
        setStoredValue(val);
        window.localStorage.setItem(key, JSON.stringify(val));

    }

    return [storedValue, setValue];

}