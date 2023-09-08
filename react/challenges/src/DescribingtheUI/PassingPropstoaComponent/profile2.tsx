/*
3. children에 JSX 전달하기
컴포넌트 태그 안에 넣는 모든 JSX는, 해당 컴포넌트에 children 프로퍼티로 전달된다!
*/


function Card({children}) {
  return (
    <div className="card">
      <div className='card-content'>
        {children}
      </div>
    </div>
  )
}

export default function Profile() {
  return (
    <div>
      <Card>
        <h1>Photo</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>
      <Card>
        <h1>About</h1>
        <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
      </Card>
    </div>
  );
}
