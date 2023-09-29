import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer } from "react-konva";
import RectWithText from "./RectWithText";

export default function Canvas({ users }) {
  const [canvasWidth, setCanvasWidth] = useState(1200);
  const [canvasHeight, setCanvasHeight] = useState(0);
  const layerRef = useRef();

  const handleDrag = (e) => {
    const shape = e.target;
    const {x, y} = shape.position();

    const minX = 0;
    const maxX = canvasWidth - shape.width();
    const minY = 0;
    const maxY = canvasHeight - shape.height();

    shape.x(Math.min(Math.max(minX, x), maxX));
    shape.y(Math.min(Math.max(minY, y), maxY));

    layerRef.current.batchDraw();
  }

  useEffect(() => {
    setCanvasHeight(window.innerHeight);
  }, []);

  return (
    <Stage width={canvasWidth} height={canvasHeight} on>
      <Layer ref={layerRef}>
        {
          users.map((user) => (
            <RectWithText key={user.name} user={user} canvasWidth={canvasWidth} canvasHeight={canvasHeight} handleDrag={handleDrag}/>
          ))
        }
      </Layer>
    </Stage>
  );
}