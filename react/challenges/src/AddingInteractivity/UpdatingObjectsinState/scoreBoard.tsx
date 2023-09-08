/*
1. state 업데이트 오류 수정하기

score 버튼을 눌러도 바로 변화되지 않고, first name을 입력해야 반영되며, last name을 입력하면 오류가 발생한다.
handlePlusClick에서는 player 객체를 변이시켰기 때문에, 리액트에서 이벤트가 발생해도 바로 렌더링을 진행하지 않은 것에 있었다.
first name이 수정되어야 state가 업데이트되어 리렌더링이 되고, 점수가 반영된다.

handleLastNameChange에서는 기존 전개구문을 통한 ...player를 새 객체에 복사하지 않았기 때문에, 오류가 발생했다.
*/

import { useState } from 'react';

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  function handlePlusClick() {
    setPlayer({
      ...player,
      score: player.score + 1,
    });
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value
    });
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>
        {' '}
        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </>
  );
}
