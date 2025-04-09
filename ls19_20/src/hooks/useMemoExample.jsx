import { useMemo } from 'react';

export function useMemoExample(value) {
    return useMemo(() => value * 2, [value]);
}