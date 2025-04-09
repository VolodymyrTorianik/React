import { useCallback } from 'react';

export function useCallbackExample() {
    return useCallback(() => {
        console.log('Callback triggered');
    }, []);
}