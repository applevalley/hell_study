/*
1. ? : 로 미완료 항목 아이콘 표시하기
조건 연산자로 isPacked가 true면 ✔를, false면 ❌를 렌더링해주자!

2. ??로 항목 중요도 표시하기
Item2 컴포넌트 내에서, prop으로 넘어오는 숫자형 데이터 importance가 0이 아닌 항목에 대해
렌더링을 진행하자!
*/

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked ? '✔' : '❌'}
    </li>
  );
}

function Item2({ name, importance }) {
  return (
    <li className="item2">
      {name}
      {importance > 0 && ''}
      {importance > 0 &&
        <i>(Importance: {importance})</i>
      }
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
