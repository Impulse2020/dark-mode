import { useState } from 'react';

export const useLocalStorage = (key, initialvalue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return [storedValue];

    });
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    };