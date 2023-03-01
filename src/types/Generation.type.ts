import { InitializerFunction } from "../types/Initializer.type";
import { AccessorFunction } from "./Accessor.type";
import { Cell } from "./Cell.type";
import { evaluateRules, Rules } from "./Rules.type";

export type Generation = Cell[];

export function createGeneration(
    size: number,
    initialize: InitializerFunction
): Generation {
    return Array(size).fill(null).map(initialize);
}

export function simulateNextGeneration(
    generation: Generation,
    access: AccessorFunction,
    rules: Rules
): Generation {
    return generation.map((cell, i, gen) => {
        return evaluateRules(
            rules,
            access(gen, i - 1),
            cell,
            access(gen, i + 1)
        );
    });
}
