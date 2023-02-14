import { useEffect } from 'react';

function useBindKeyPress(key, callback, additionalConditions = [true]) {
    useEffect(() => {
        if (additionalConditions.every(v => v === true) && key) {
            callback();
        }
    }, [key, ...additionalConditions]);
}

export default useBindKeyPress