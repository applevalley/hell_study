/*
4. 불필요 state 제거

state 변수는 컴포넌트의 리렌더링 사이에 정보를 유지해야 할 때 사용한다..
일반 변수가 잘 동작한다면, 굳이 도입하지 않아도 된다!
*/

import { useState } from 'react';

export default function FeedbackForm() {
  // const [name, setName] = useState('');

  function handleClick() {
    // 이 부분이 문제가 된 원인
    // setName(prompt('What is your name?'));
    const name = prompt('What is your name?');
    alert(`Hello, ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}