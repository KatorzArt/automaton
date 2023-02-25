export function Settings() {
    return (
        <div>
            <div>
                <h2>Sizing</h2>
                <div>
                    <div>
                        <label>Width</label>
                        <input type="number" min="0" />
                    </div>
                    <div>
                        <label>Height</label>
                        <input type="number" min="0" />
                    </div>
                </div>
            </div>
            <div>
                <h2>Generation</h2>
                <label>Rules</label>
                <div>
                    <input type="number" min="0" max="255" />
                    <button type="button">Random</button>
                </div>
            </div>
            <div>
                <button type="button">Next generation</button>
                <button type="button">Start auto evolution</button>
            </div>
        </div>
    );
}
