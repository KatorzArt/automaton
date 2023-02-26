import { useState } from "react";
import { Settings } from "./components/Settings";

function App() {
    const [width, setWidth] = useState(5);
    const [height, setHeight] = useState(5);
    const [rulesNum, setRulesNum] = useState(110);
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
        </>
    );
}

export default App;
