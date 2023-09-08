/*
3. 일련의 ? :를 if나 변수로 리팩토링하기
Drink 컴포넌트에서는, ? : 조건을 통해 prop으로 넘어오는 name이 tea인지, coffee인지에 따라 다른 정보를 표시한다.

Drink 컴포넌트 안에서 let 키워드로 변수들을 선언하고, prop이 tea인지, coffee인지에 따라 if - else if로 분기처리가 가능하다!
*/

function Drink({ name }) {
  let part, caffeine, age;
  if (name === 'tea') {
    part = 'leaf';
    caffeine = '15–70 mg/cup';
    age = '4,000+ years';
  } else if (name === 'coffee') {
    part = 'bean';
    caffeine = '80–185 mg/cup';
    age = '1,000+ years';
  }
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{part}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeine}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
