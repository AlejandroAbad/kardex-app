import { useState, useEffect } from 'react';

const useStateWithLocalStorage = (localStorageKey, defaultValue = '') => {
    const [value, setValue] = useState(
        localStorage.getItem(localStorageKey) || defaultValue
    );

    useEffect(() => {
        localStorage.setItem(localStorageKey, value);
    }, [value, localStorageKey]);
    return [value, setValue];
};

export default useStateWithLocalStorage;