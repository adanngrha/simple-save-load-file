import React, { useEffect, useState } from "react";
import { Stage, Layer } from "react-konva";
import RectWithText from "./RectWithText";

export default function Canvas() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  return (
    <Stage width={1000} height={height}>
      <Layer>
        <RectWithText />
      </Layer>
    </Stage>
  );
}