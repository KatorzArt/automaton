import { ChangeEvent } from "react";

export function Settings({
    width,
    height,
    rules,
    updateWidth,
    updateHeight,
    updateRules,
    onNextGeneration,
    onToggleAutoGeneration,
}: {
    width: number;
    height: number;
    rules: number;
    updateWidth: (x: number) => void;
    updateHeight: (x: number) => void;
    updateRules: (x: number) => void;
    onNextGeneration: () => void;
    onToggleAutoGeneration: () => void;
}) {
    function getAsNumber(e: ChangeEvent<HTMLInputElement>) {
        return e.target.valueAsNumber;
    }

    function handleChange(
        update: (x: number) => void
    ): (e: ChangeEvent<HTMLInputElement>) => void {
        return (e) => update(getAsNumber(e));
    }

    function setRandomRulesNum() {
        return updateRules(Math.floor(Math.random() * 256));
    }

    return (
        <div>
            <div>
                <h2>Sizing</h2>
                <div>
                    <div>
                        <label>Width</label>
                        <input
                            type="number"
                            min="0"
                            value={width}
                            onChange={handleChange(updateWidth)}
                        />
                    </div>
                    <div>
                        <label>Height</label>
                        <input
                            type="number"
                            min="0"
                            value={height}
                            onChange={handleChange(updateHeight)}
                        />
                    </div>
                </div>
            </div>
            <div>
                <h2>Generation</h2>
                <label>Rules</label>
                <div>
                    <input
                        type="number"
                        min="0"
                        max="255"
                        value={rules}
                        onChange={handleChange(updateRules)}
                    />
                    <button type="button" onClick={setRandomRulesNum}>
                        Random
                    </button>
                </div>
            </div>
            <div>
                <button type="button" onClick={onNextGeneration}>
                    Next generation
                </button>
                <button type="button" onClick={onToggleAutoGeneration}>
                    Toggle auto evolution
                </button>
            </div>
        </div>
    );
}
