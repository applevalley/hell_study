/*
2. 변이 수정하기

배경의 position prop은 0, 0으로 설정되어 있지만, handleMove 내부에서 변이가 발생해 
도형을 움직이면 배경도 따라 움직이게 되었다.

handleMove 내부의 변이를 제거하고, 전개 구문을 통해 모양을 복사하자!
*/

import { useState } from 'react';
// import { useImmer } from 'use-immer';
import Background from './Background.js';
import Box from './Box.js';

const initialPosition = {
  x: 0,
  y: 0
};

export default function Canvas() {
  const [shape, setShape] = useState({
    color: 'orange',
    position: initialPosition
  });

  //immer를 통해 간결한 업데이트 로직 작성
  // const [shape, updateShape] = useImmer({
  //   color: 'orange',
  //   position: initialPosition
  // });

  function handleMove(dx, dy) {
    setShape({
      ...shape,
      position: {
        x: shape.position.x + dx,
        y: shape.position.y + dy,
      }
    });
  }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value
    });
  }

  return (
    <>
      <select
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background
        position={initialPosition}
      />
      <Box
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        Drag me!
      </Box>
    </>
  );
}
