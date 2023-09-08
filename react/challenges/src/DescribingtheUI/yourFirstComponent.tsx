// 1. 컴포넌트 내보내기
// root 컴포넌트를 내보내려면, 함수 정의 앞에 export default를 추가하기!
function Profile() {
  return <img src="https://i.imgur.com/lICfvbD.jpg" alt="Aklilu Lemma" />;
}

// 2. return문 고치기
// return문에 문제가 생긴 이유는, return 키워드가 위치한 줄 다음에 마크업을 작성해서,
// return 키워드 이후의 코드들이 전부 무시되었기 때문이다.
// return 키워드 이후를 소괄호로 감싸는 형식으로 해결할 수 있다!
function Profile2() {
  return <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
}

// 3. 실수 찾기
// 리액트는, 컴포넌트와 HTML 태그를 대소문자로 구분한다.
// 컴포넌트의 반환부 내에서 소문자로 시작한다면, HTML 태그로, 대문자로 시작한다면, 컴포넌트로 판단한다!
// profile3 컴포넌트의 시작을 대문자로 변경하고, gallary의 return문 안에서도 profile3의 시작을 대문자로 변경해주자!
function Profile3() {
  return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
}

function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile3 />
      <Profile3 />
      <Profile3 />
    </section>
  );
}

// 4. 컴포넌트 새로 작성하기

function Congratulations() {
  return <h1>Good job!</h1>;
}

export default function ProfileToShow() {
  return (
    <>
      <h1>1번</h1>
      <Profile />
      <h1>2번</h1>
      <Profile2 />
      <h1>3번</h1>
      <Profile3 />
      <h1>4번</h1>
      <Congratulations />
    </>
  );
}
