import { useContext, useEffect } from "react";
import { CanvasContext } from "./Canvas";

export function Rectangle({
    x,
    y,
    w,
    h,
    color,
}: {
    x: number;
    y: number;
    w: number;
    h: number;
    color: string;
}) {
    const context = useContext(CanvasContext);

    const draw = () => {
        if (!context) return;
        context.fillStyle = color;
        context.fillRect(x, y, w, h);
    };

    const clear = () => {
        if (!context) return;
        context.clearRect(x, y, w, h);
    };

    useEffect(() => {
        draw();
        return clear;
    });

    return <></>;
}
