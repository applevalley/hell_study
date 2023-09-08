// 1. 컴포넌트 더 분리하기
// 한 파일에 존재하던 컴포넌트들을 새로운 파일을 만들어 분리할 수 있다.
// 컴포넌트를 넣을 새로운 파일을 생성하고, 생성한 파일에서 분리할 컴포넌트를 적어 내보내고,
// 그리고 분리된 컴포넌트를 불러올 파일에서 import한다!
// 한 파일에서 default는 한 번만 사용할 수 있지만, named export/import는 여러 번 사용이 가능하다.
// 이 경우, 내보내는 경우 default 없이 export ~~ 처럼 사용한다.
// 불러올 때에는, import { 컴포넌트명 } 과 같이 중괄호를 사용하자!
// 예시에서는 파일을 분리하였지만, 여기서는 편의상 분리했다 가정하고 작성하였다.

// Profile.js
export function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

// Gallary.js
// 이 파일에서도 Profile 컴포넌트를 불러오기에, named import를 사용한다.
// import {Profile} from './Profile.js'

function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

// App.js
// import Gallery from './Gallery.js';
// import {Profile} from './Profile.js'

export default function DefaultAndNamedImport() {
  return (
    <div>
      <Profile />
      <Gallery />
    </div>
  );
}