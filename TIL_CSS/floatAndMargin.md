## [예제](https://github.com/uchang7194/project/tree/master/homework/floatAndMargin)
## float
> element가 자신의 부모위치로 부터 left, right 방향에 놓이게끔 지정.

### 동작원리(MDN)
- element를 float 속성을 지정하게 되면 문서의 흐름에서 빠지게 된다. 이 element는 float 속성값에 따라 부모의 왼쪽 끝 또는 오른쪽 끝에 놓이게 되고 논리적순서에 따라 쌓이는 방향이 안쪽으로 설정이 된다. 그리고 더 이상 쌓일 영역이 없으면 다음줄로 넘어간다.

### 특징
- float된 요소는 부모 속성의 높이값에 영향을 미치지 않는다.
  - 위 특징을 해결하기 위해서는 부모요소의 `가상선택자`를 이용해서 해결하면 된다.
- float된 요소는 margin: auto; 속성을 무시한다.

#### `가상선택자`를 사용하는 방법 
- 부모의 가상선택자를 적용한다.
```css
PARENT_ELEMENT::after {

}
```
- 가상선택자는 content요소를 가지고 있는데 content를 생성하지 않으면 가상선택자가 적용되지 않는다.
```css
PARENT_ELEMENT::after {
  content: '';
}
```
- 가상선택자는 인라인이 기본이기 때문에 높이나 넓이가 적용되지 않는다. 그래서 display: block; 속성을 적용해준다. block을 적용하면 after 가상요소는 자식요소들의 마지막에 생성되어 부모가 가상요소를 제외한 자식요소들(가장 큰)의 높이를 가지게 된다. 
```css
PARENT_ELEMENT::after {
  content: '';
  display: block;
}
```
- 마지막으로 clear: both; 속성을 적용시켜준다. `clear`속성은 모든 float의 요소를 제거한다. `clear: both`를 사용하는 이유는 float 방향에 관계없이 사용할 수 있게 하기 위해서 사용한다.
```css
PARENT_ELEMENT::after {
  content: '';
  display: block;
  clear: both;
}
```
- `가상선택자`란?
  - 존재하지 않는 엘리먼트를 생성하는 선택자이다.
  - 종류
    - after: 부모의 자식요소들의 맨 뒤쪽에 생성된다.
    - before: 부모의 자식요소들의 맨 앞쪽에 생성된다.
    - first-line: 문단에서 첫번째 줄에 스타일을 적용한다.
    - first-letter: 문단에서 첫번째 글자에 스타일을 적용한다.
  - 특징
    - IE 6, 7에서는 가상선택자를 사용하지 못한다.
      - 해결방법: `*zoom: 1;` 속성은 hasLayout이라는 고유한 성질을 갖게 되면 float를 해체하는 트리거로 작용하는 성질이 있다.
### tip
- clearfix는 공용클래스로 만들어서 사용하면 clearfix를 여러번 사용하지 않고 사용할 수 있다.

<hr>

## 음수 마진
> 마진을 설정한 방향으로 element가 움직인다.
* 참고: 본인은 float과 음수 마진을 같이 사용하였음. 그래서 float이 적용된 element를 위주로 음수마진을 정리함.
- 일단 모르겠다.


