import { useEffect, useMemo, useState } from "react";
import { Settings } from "./components/Settings";
import { Accessor } from "./types/Accessor.type";
import { Initializer } from "./types/Initializer.type";
import { createRulesFromNumber } from "./types/Rules.type";
import {
    createSimulation,
    simulate,
    Simulation,
} from "./types/Simulation.type";

function App() {
    const [width, setWidth] = useState(5);
    const [height, setHeight] = useState(5);
    const [rulesNum, setRulesNum] = useState(110);

    const rules = useMemo(() => createRulesFromNumber(rulesNum), [rulesNum]);
    const [simulation, setSimulation] = useState<Simulation>([]);

    const handleNextGeneration = () => {
        setSimulation((s) => simulate(s, Accessor.CLAMP, rules));
    };

    useEffect(() => {
        setSimulation(createSimulation(width, height, Initializer.RANDOM));
    }, [width, height]);

    return (
        <>
            <Settings
                width={width}
                height={height}
                rules={rulesNum}
                updateWidth={setWidth}
                updateHeight={setHeight}
                updateRules={setRulesNum}
                onNextGeneration={handleNextGeneration}
                onToggleAutoGeneration={() => {}}
            />
        </>
    );
}

export default App;
