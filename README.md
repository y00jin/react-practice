# ERROR - 해결방법 정리
- 'React' must be in scope when using JSX  react/react-in-jsx-scope

   import 부분이 잘못되면 생기는 오류

   ```
   (ERR) import react, {Component} from 'react';

   import react, {Component} from 'react';
   ```

- 'fixedNumber' is not defined  no-undef  

   해당하는 state를 조회하지 않아서 생기는 오류

   ```
   (ERR) const {number} = this.state;

   const {number, fixedNumber} = this.state;
   ```

## constructor 사용하지 않고 state 사용하기
```
constructor(props) {
   super(props);

   this.state = {
      number: 0,
      fixedNumber: 0
   };
}
```
```
state = {
   number: 0,
   fixedNumber: 0
};
```

## 배열 비구조화 할당
```
const array = [1,2];
const one = array[0];
const two = array[1];

...

const array = [1,2];
const [one, two] = array;
```

## 작업 환경 설정

1. node.js 설치
2. yarn 설치(npm으로 대체 가능)

   - https://classic.yarnpkg.com/en/docs/install#windows-stable

    
    1. yarn create react-app hello-react

    2. cd hello-react

    3. yarn start# react-practice

