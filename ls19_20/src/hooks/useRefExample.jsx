import { useRef, useEffect } from 'react';

export function useRefExample() {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, []);
    return inputRef;
}