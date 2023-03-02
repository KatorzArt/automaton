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
                {simulation.map((generation, i) => {
                    return generation?.map((cell, j) => {
                        return (
                            <Rectangle
                                x={j * scale}
                                y={i * scale}
                                w={scale}
                                h={scale}
                                color={cell ? "white" : "black"}
                            />
                        );
                    });
                })}
            </Canvas>
        </>
    );
}

export default App;
