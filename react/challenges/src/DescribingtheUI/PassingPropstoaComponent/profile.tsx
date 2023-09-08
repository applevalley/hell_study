/*
2. prop에 따른 이미지 조정하기
size prop에 따라 가장 가까운 이미지의 크기를 요청하게끔 만들기 위해서는, Avatar 컴포넌트 내에서 
size의 크기에 따라 분기처리를 하면 된다!
*/

import { getImageUrl } from './util';

function Avatar({ person, size }) {
  let thumbnailSize = 's';
  if (size > 90) {
    thumbnailSize = 'b';
  }
  return (
    <img
      className="avatar"
      src={getImageUrl(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <>
      <Avatar
        size={40}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
      <Avatar
        size={120}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
    </>
  );
}
