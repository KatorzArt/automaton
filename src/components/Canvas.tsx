import {
    createContext,
    PropsWithChildren,
    useEffect,
    useRef,
    useState,
} from "react";

export const CanvasContext = createContext<CanvasRenderingContext2D | null>(
    null
);

export function Canvas({
    width,
    height,
    scale,
    children,
}: PropsWithChildren<{ width: number; height: number; scale: number }>) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(
        null
    );

    useEffect(() => {
        if (!canvasRef.current) return;
        setContext(canvasRef.current.getContext("2d"));
    }, [canvasRef]);

    return (
        <CanvasContext.Provider value={context}>
            <canvas
                ref={canvasRef}
                width={width * scale}
                height={height * scale}
            >
                {children}
            </canvas>
        </CanvasContext.Provider>
    );
}
