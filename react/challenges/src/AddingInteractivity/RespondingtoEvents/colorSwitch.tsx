/*
2. 이벤트 연결
<button onClick={onChangeColor}>과 같이 이벤트 핸들러를 추가하게 되면,
이벤트가 상위로 전파된다. 전파를 중지시키자!
*/


export default function ColorSwitch({
  onChangeColor
}) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onChangeColor();
    }}>
      Change color
    </button>
  );
}