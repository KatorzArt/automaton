type AccessorFunction = (arr: boolean[], i: number) => boolean;

export const Accessor: { [key: string]: AccessorFunction } = Object.freeze({
    CLAMP: (arr, i) => arr[Math.min(Math.max(0, i), arr.length - 1)] as boolean,
    LOOP: (arr, i) => arr.at(i % arr.length) as boolean,
});
