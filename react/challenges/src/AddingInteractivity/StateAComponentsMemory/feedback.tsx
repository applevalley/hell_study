/*
3. 충돌 고치기

예상보다 적은 수의 훅을 렌더링했습니다 라는 오류가 발생한 원인은,
훅을 컴포넌트 함수의 최상위에서 호출하지 않았기 때문이다.
조건문 안에서 훅을 호출하면, 경우에 따라 호출이 되지 않을 수 있기 때문이다!
const [message, setMessage] = useState(''); 부분을 최상위로 올려주자.
*/

import { useState } from 'react';

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    // eslint-disable-next-line
    const [message, setMessage] = useState('');
    return (
      <form onSubmit={e => {
        e.preventDefault();
        alert(`Sending: "${message}"`);
        setIsSent(true);
      }}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}
