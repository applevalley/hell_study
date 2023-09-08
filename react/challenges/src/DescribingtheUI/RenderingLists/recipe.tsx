/*
2. 중첩 목록

map() 메서드를 통해 recipes 배열 내에서 name을 가져오고,
또 recipes 배열 내 요소들이 각자 가진 ingredients에 접근해 재료를 가져와야 한다!

3. 목록 항목 컴포넌트 추출 

2번과 같이 사용한 경우, recipes 배열에 대해 한번, 또 내부 요소 recipe에서 한번
총 2번의 map() 메서드가 중첩된다. 
이러한 구조를 개선하기 위해, 외부 recipes를 대상으로 했던 map() 을 컴포넌트로 분리할 수 있다!
*/

import { recipes } from './data';

// export default function RecipeList() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {recipes.map(recipe =>
//         <div key={recipe.id}>
//           <h2>{recipe.name}</h2>
//           <ul>
//             {/* 재료까지 보여주기 위해서 map() 메서드를 2번 사용해야 한다. */}
//             {recipe.ingredients.map(ingredient =>
//               <li key={ingredient}>
//                 {ingredient}
//               </li>
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }


function Recipe({ id, name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ingredient =>
          <li key={ingredient}>
            {ingredient}
          </li>
        )}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
      // key는 Recipe 컴포넌트에서 반환된 div 요소가 아니라, Recipe 컴포넌트 자체에 지정된다.
        <Recipe {...recipe} key={recipe.id} />
      )}
    </div>
  );
}

