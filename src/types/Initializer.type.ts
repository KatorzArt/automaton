export type InitializerFunction = (x?: unknown, i?: number) => boolean;

export const Initializer: {
    [key: string]: InitializerFunction;
} = Object.freeze({
    RANDOM: () => Math.random() < 0.5,
    FIRST: (_, i) => i === 0,
});
