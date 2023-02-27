import { useState } from "react";
import { Canvas } from "./components/Canvas";
import { Rectangle } from "./components/Rectangle";
import { Settings } from "./components/Settings";

function App() {
    const [width, setWidth] = useState(5);
    const [height, setHeight] = useState(5);
    const [rulesNum, setRulesNum] = useState(110);
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
                onNextGeneration={() => {}}
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
