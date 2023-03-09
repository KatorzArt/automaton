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
        <div className="flex-col gap-500">
            <div className="section">
                <h2>Sizing</h2>
                <div className="flex gap-300">
                    <div className="field-group">
                        <label>Width</label>
                        <input
                            type="number"
                            min="0"
                            value={width}
                            onChange={handleChange(updateWidth)}
                        />
                    </div>
                    <div className="field-group">
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
            <div className="section">
                <h2>Generation</h2>
                <div className="field-group">
                    <label>Rules</label>
                    <div className="flex gap-100">
                        <input
                            className="grow"
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
            </div>
            <div className="field-group flex gap-100">
                <button
                    className="grow"
                    type="button"
                    onClick={onNextGeneration}
                >
                    Next generation
                </button>
                <button
                    className="grow"
                    type="button"
                    onClick={onToggleAutoGeneration}
                >
                    Toggle auto evolution
                </button>
            </div>
        </div>
    );
}
