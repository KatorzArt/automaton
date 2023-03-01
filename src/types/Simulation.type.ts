import { AccessorFunction } from "./Accessor.type";
import { Generation, simulateNextGeneration } from "./Generation.type";
import { InitializerFunction } from "./Initializer.type";
import { Rules } from "./Rules.type";

export type Simulation = Array<Generation | null>;

export function createSimulation(
    width: number,
    height: number,
    initialize: InitializerFunction
): Simulation {
    return Array(height)
        .fill(Array(width).fill(null))
        .map((gen, i) => (i === 0 ? gen.map(initialize) : gen));
}

export function simulate(
    simulation: Simulation,
    access: AccessorFunction,
    rules: Rules
): Simulation {
    const nullIndex = simulation.findIndex((gen) =>
        gen?.some((cell) => cell === null)
    );
    if (nullIndex < 0)
        return simulation.map((gen, i) =>
            i === simulation.length - 1
                ? simulateNextGeneration(gen as Generation, access, rules)
                : simulation[i + 1]
        );
    return simulation.map((gen, i) =>
        i === nullIndex
            ? simulateNextGeneration(
                  simulation[i - 1] as Generation,
                  access,
                  rules
              )
            : gen
    );
}
