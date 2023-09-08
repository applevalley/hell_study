/*
1. 이벤트 핸들러 수정하기

<button onClick={handleClick()}>이 렌더링되는 시점에, handleClick 함수를 
전달하지 않고 호출하게 되기 때문에, () 호출을 제거하면 오류를 고칠 수 있다!
*/


export default function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white';
    } else {
      bodyStyle.backgroundColor = 'black';
    }
  }

  return (
    <button onClick={handleClick}>
      Toggle the lights
    </button>
  );
}
