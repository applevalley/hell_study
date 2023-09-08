/*
2. input 오류 고치기

입력 필드에 값을 입력해도 보여지지 않는 이유는, onchange 이벤트 핸들러를 통해
사용자에게 입력받은 값에 따라 변수 firstname이나 lastname을 업데이트하려 시도하지만,
다시 렌더링되는 동안 값이 저장되지 않기 때문이다. 
state 변수를 사용해 이 문제를 해결할 수 있다!
*/

import { useState } from 'react';

export default function Form() {
  // useState를 가져와, 호출해 변수를 바꿔준다. 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName('');
    setLastName('');
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
