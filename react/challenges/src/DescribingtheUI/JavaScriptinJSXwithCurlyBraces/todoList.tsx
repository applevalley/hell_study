/*
1. 실수 고치기
예제의 <h1>{person}'s Todos</h1>은, 문자열이 아닌 person 객체 자체를 렌더링하려고 시도한다!
객체가 아닌 person 객체의 name이라는 속성을 전달해야 하기에, {person.name}과 같이 수정한다.

2. 정보를 객체로 추출하기
이미지의 url을 person 객체로 추출하는 작업을 수행한다.
TodoList의 img 태그 내 src 속성에서의 url 주소를 person 객체 내에 속성으로 추가하고,
{person.imageURL}과 같이 접근해서 사용한다!

3. JSX 중괄호 안에 표현식 작성하기
여러 표현식을 하나의 객체로 이동시켜, 중괄호 안에 있는 JSX에서 참조하게 할 수 있다.
예시 코드 기준으로는, {baseUrl + person.imageId + person.imageSize + '.jpg'} 와 같이 중괄호로 묶어줄 수 있다!
*/


const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  },
  imageUrl: 'https://i.imgur.com/7vQD0fPs.jpg'
};


const baseUrl = 'https://i.imgur.com/';
const person2 = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};


export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}`s Todos</h1>
      <img
        className="avatar"
        src={person.imageUrl}
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
      <br />
      <div style={person2.theme}>
        <h1>{person2.name}`s Todos</h1>
        <img
          className="avatar"
          src={baseUrl + person2.imageId + person2.imageSize + '.jpg'}
          alt={person2.name}
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>

    </div>
  );
}
