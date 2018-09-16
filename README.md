# hi-login
Make Login Form with React

### 회원가입 로그인 모듈 만들기

> 2018.09.04
  - title : 초기 설정
  - content : 
    - create-react-app 생성
  - idea : 
    - 회원가입/로그인 모듈을 만들어보자.
    - 뭐부터 시작해야될까..?

> 2018.09.07
  - title : Backend Open By koa
  - content :
    - frontend, backend 구분
    - backend 폴더 koa 설치 // open Test
    - nodemon으로 개발환경 setting
    - koa-router 설치
  - idea :
    - api 폴더 만들어서 라우트들 정리 해보자.

> 2018.09.08
  - title : Ready api
  - content :
    - login, signup path 분할
    - Postman test : OK
  - idea :
    - handler도 따로 분할 하자.

> 2018.09.08
  - title : Ready api 2
  - content :
    - handler 분할 
  - idea :
    - 데이터를 담을 DB를 만들어보자.

> 2018.09.09
  - title : Ready DB & Api Test
  - content :
    - mongoose 설치
    - dotenv 설치
    - login, signup 폴더 user로 변경
    - postman test OK
  - idea :
    - 생각해보니깐 폴더를 나눌 필요가 없었다. (생각 좀 하고 작업하자...)
    - patch 쓸 때, name 검증이 잘 안되네..? 이렇게 쓰는게 아닌가..?

> 2018.09.13
  - title : Ready to Frontend 
  - content :
    - 확인용 list api 생성
    - react-router-dom, axios 설치
    - 디렉토리 정리
    - route test OK
  - idea :
    - sass 설치하기
    - 프록시 설정해서 프론트에서 백으로 넘겨 볼 것.

> 2018.09.14
  - title : FE Styling
  - content : 
    - sass 설치
    - 기본 스타일 설정
  - idea :
    - 회원가입 할 때 비밀번호 확인 처리하기
    - http method 넘겨서 회원가입 부분만 테스트 해 볼 것

> 2018.09.15
  - title : Sign Up Test
  - content : 
    - proxy 설정
    - post '/api/users' Test [OK]
  - idea :
    - 아이디 중복, 비밀번호 확인, 이메일 형식확인 고민해 볼 것
    - 로그인, 로그아웃, 회원탈퇴, 고민해 볼 것
    - 회원가입 구현방법 좀 더 찾아 볼 것

> 2018.09.16
  - title : Sign Up Test 2
  - content : 
    - 아이디 중복, 비밀번호 확인, 이메일 형식확인 정리
    - Test OK
    - 생각해보니깐 로그인도 get 아니라 post로 보내야 될 것 같다.
  - idea :
    - 로그인, 로그아웃, 회원탈퇴, 계속 고민해 볼 것
    - 회원가입 구현방법 계속 좀 더 찾아 볼 것