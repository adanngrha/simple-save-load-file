import React, { useState } from 'react';
import { Group, Rect, Text } from 'react-konva';

export default function RectWithText()  {

  return (
    <Group x={25} y={25} width={130} height={45} draggable>
      <Rect width={130} height={45} fill="lightgreen" />
      <Text
        text="Ardan Nugraha, 18 Years Old"
        fontSize={18}
        fontFamily="Calibri"
        fill="#000"
        width={130}
        padding={5}
        align="center"
      />
    </Group>
  );
};
