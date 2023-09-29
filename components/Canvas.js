import React, { useEffect, useState } from "react";
import { Stage, Layer } from "react-konva";
import RectWithText from "./RectWithText";

export default function Canvas({ users }) {
  const [canvasWidth, setCanvasWidth] = useState(1200);
  const [canvasHeight, setCanvasHeight] = useState(0);

  useEffect(() => {
    setCanvasHeight(window.innerHeight);
  }, []);

  return (
    <Stage width={canvasWidth} height={canvasHeight} on>
      <Layer>
        {
          users.map((user) => (
            <RectWithText key={user.name} user={user} canvasWidth={canvasWidth} canvasHeight={canvasHeight}/>
          ))
        }
      </Layer>
    </Stage>
  );
}