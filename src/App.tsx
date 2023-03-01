import { useEffect, useMemo, useState } from "react";
import { Canvas } from "./components/Canvas";
import { Rectangle } from "./components/Rectangle";
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

    const scale = 100;
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
            <Canvas width={width} height={height} scale={scale}>
                <Rectangle x={10} y={10} w={50} h={50} color="red" />
                <Rectangle x={35} y={35} w={50} h={50} color="blue" />
            </Canvas>
        </>
    );
}

export default App;
