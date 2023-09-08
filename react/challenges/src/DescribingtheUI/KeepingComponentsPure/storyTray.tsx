/*
3. 스토리 고치기
stories 배열에 대해 push를 호출하는 과정에서, storytray가 렌더링을 시작하기 전
생성된 객체를 변이시키기에 사이드 이펙트가 발생한다..

배열을 건드리지 않고, create story를 별도로 렌더링해주자!
*/

export default function StoryTray({ stories }) {
  return (
    <ul>
      {stories.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
      <li>Create Story</li>
    </ul>
  );
}
