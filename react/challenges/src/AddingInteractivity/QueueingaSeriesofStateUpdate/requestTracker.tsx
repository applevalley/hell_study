/*
1. 요청 카운터 고치기
첫 렌더링시 pending의 값은 0이기에,  setPending(pending - 1); 은 -1이 된다.
p => p - 1과 같이 큐의 이전 state를 기반으로 다음 state를 계산하는 업데이트 함수를 사용하자!
*/


import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(p => p + 1);
    await delay(3000);
    setPending(p => p - 1);
    setCompleted(c => c + 1);
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy     
      </button>
    </>
  );
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
