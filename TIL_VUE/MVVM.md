## MVVM
> MODEL VIEW VIEW-MODEL
- vue는 MVVM모델을 사용하지 않지만 디자인적으로는 MVVM모델의 영향을 받았다.

### 목적
- vue는 MVVM에서 VM을 담당하게 되는데 model(js)와 view(DOM)간의 바인딩을 해주는 역할을 한다.
#### vue에서 VM이 동작하는 과정
- vue는 데이터(MODEL)이 변하면 바로 DOM(VIEW)에 적용시켜준다.<br>
  예를 들어 vue를 사용하지 않고 javascript만으로 데이터가 변경될 때 마다 DOM객체의 내용을 변경시켜주려고 한다면 특정 이벤트 요소가 필요하다.<br>
  ```javascript
  /*
    input의 value값이 변경될 때 마다 h1태그가 바뀐다고 가정.
  */
  
  var input = document.querySelector('input'),
      h1 = document.querySelector('h1');
  
  input.addEventListener('keypress', function(e){
    h1.innerText = e.target.value;
  });
  ```
  <br>
  이렇게 사용하는 것은 이벤트 바인딩을 사용하는 것이고 vue에서 사용되는 바인딩은 특정 객체에 감시자를 두고 상태가 변경될 때 마다 감시자가 setter와 getter에 있는 로직을 실행시켜준다. 물론 javascript에서도 사용할 수 있는데 Object.defineProperty를 가지고 사용할 수 있다.
  <br>

  ```javascript
  /* input 태그의 속성중 value값의 변화를 주면 바로 바뀌게끔 만들어봄. */
  var input = document.querySelector('input'),
      h1 = document.querySelector('h1');
  
  if(!input.value) {
    Object.defineProperty(input, 'value', {
      get: function() {
        return this.value;
      },
      set: function(newVal) {
        value = newVal;
        h1.innerText = value;
      }
    })
  }

  // 입력값
  input.value = 'hello world';
  // 출력값
  // <h2>hello world</h2>
  ```
  <br>
  이처럼 vue가 바인딩 되는 과정도 이러한 과정들을 거치는 것이다.

#### 간단 vue 데이터 플로우
- 데이터 -> [감시자 -> 지시자] -> DOM
