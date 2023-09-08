// 1. HTML을 JSX로 변환하기
// HTML을 JSX로 변환하기 위해서는, 
// 단일 루트 엘리먼트를 반환하고, 모든 태그를 닫고, 어트리뷰트에 카멜 케이스를 사용해주어야 한다!

// 아래의 예시에서는, return 키워드 이후의 소괄호에 div와 p라는 2개의 요소가 존재한다.
// 이를 div와 같은 하나의 단일 요소로 묶어주거나, 아니면  Fragment를 사용할 수도 있다1
// 그리고 div 태그에 적용된 class 어트리뷰트는 카멜 케이스로 작성해야 하기에, className으로 변경한다.
// 마지막으로 b태그와 i태그의 순서를 조정한다!

export default function Bio() {
  return (
    <>
    <div className="intro">
      <h1>Welcome to my website!</h1>
    </div>
    <p className="summary">
      You can find my thoughts here.
      <br /><br />
      <b>And <i>pictures</i></b> of scientists!
    </p>
    </>
  );
}
