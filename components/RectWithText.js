import React, { useState } from 'react';
import { Group, Rect, Text } from 'react-konva';

export default function RectWithText({ user, canvasWidth, canvasHeight, handleDrag }) {
  const [onDrag, setOnDrag] = useState(false);
  const [x, setX] = useState(Math.random() * canvasWidth);
  const [y, setY] = useState(Math.random() * canvasHeight);

  const handleDragStart = () => {
    setOnDrag(true);
  };

  const handleDragEnd = () => {
    setOnDrag(false);
  }

  return (
    <Group x={x} y={y} width={110} height={40} draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDragMove={handleDrag}>
      <Rect
        width={110}
        height={40}
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
        width={110}
        padding={5}
        align="center"
        data={`M0,0 L300,0`}
      />
    </Group>
  );
};
