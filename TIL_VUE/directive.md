## 사용자 정의 directive
[예제](./TIL_EXAM/Vue/directive/)
### 사용방법
```javascript
Vue.directive('USING_NAME', callback | {
  bind: function(){},
  inserted: function(){},
  update: function(){},
  componentUpdated: function(){},
  unbind: function(){},
});
```
  - bind: directive가 바인딩 될 때 한번만 호출.
  - inserted: 바인딩 된 엘리먼트가 부모노드에 삽입되었을 때 호출.
  - update: 포함하는 컴포넌트가 업데이트 된 후 호출.
  - componentUpdated: 포함하고 있는 컴포넌트와 그 자식들이 업데이트 된 후에 호출.
  - unbind: directive가 엘리먼트로부터 언바인딩된 경우에만 한번 호출.

#### arguments
  - el: DOM
  - binding: Object
    - name: v-접두어가 없는 디렉티브 이름.
    - value: 디렉티브에 전달된 값.
    - oldValue: 이전 값.(update와 componentUpdated에서만 가능.)
    - expression: 문자열로 바인딩 된 표현식.
    - arg: 전달인자가 있으면 directive에 전달됨. ex) v-my-directive:foo에서 foo가 arg
    - modifiers: 수정자를 포함한 오브젝트가 존재하는 경우. ex) v-my-directive.foo.bar에서 수정자 객체는 {foo: true, bar: true}
