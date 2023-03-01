import { Cell } from "./Cell.type";

export type Rules = [
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean
];

export function createRulesFromNumber(num: number): Rules {
    return Array.from(num.toString(2).padStart(8, "0"))
        .map((c) => c === "1")
        .reverse() as Rules;
}

export function evaluateRules(
    rules: Rules,
    leftCell: Cell,
    middleCell: Cell,
    rightCell: Cell
): Cell {
    return rules[
        Number(leftCell) * 4 + Number(middleCell) * 2 + Number(rightCell)
    ];
}
