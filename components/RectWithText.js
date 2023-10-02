import React, { useEffect, useState } from 'react';
import { Group, Rect, Text } from 'react-konva';

export default function RectWithText({ user, canvasWidth, canvasHeight, handleDrag }) {
  const [onDrag, setOnDrag] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const width = 110;
  const height = 40;

  const handleDragStart = () => {
    setOnDrag(true);
  };

  const handleDragEnd = () => {
    setOnDrag(false);
  }

  useEffect(() => {
    setX(Math.random() * (canvasWidth - width));
    setY(Math.random() * (canvasHeight - height));
  }, [canvasHeight, canvasWidth])

  return (
    <Group x={x} y={y} width={width} height={height} draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDragMove={handleDrag}>
      <Rect
        width={width}
        height={height}
        fill={user.role === "Admin" ? "lightgreen" : "lightblue"}
        shadowColor="black"
        shadowBlur={10}
        shadowOffsetX={10}
        shadowOffsetY={10}
        shadowOpacity={0.2}
        cornerRadius={10}
      />
      <Text
        text={`${user.name}, ${user.age} Years Old`}
        fontSize={15}
        fontFamily="Calibri"
        fill="black"
        width={width}
        padding={5}
        align="center"
        data={`M0,0 L300,0`}
      />
    </Group>
  );
};
