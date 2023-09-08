/*
1. 시계 고치기
hours prop에 따라 getElementById 메서드를 호출하는 부분을 변경해주자!
*/


export default function Clock({ time }) {
  let hours = time.getHours();
  let className;
  if (hours >= 0 && hours <= 6) {
    className = 'night';
  } else {
    className = 'day';
  }
  return (
    <h1 className={className}>
      {time.toLocaleTimeString()}
    </h1>
  );
}
