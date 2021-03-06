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

> 2018.09.17
  - title : Login Test
  - content : 
    - 로그인 기능 구현
    - Test OK
  - idea :
    - 이렇게 하는게 맞는건가..
    - 로그인 관련된 기능은 확실히 리덕스 같은 상태관리 라이브러리가 유용할 것 같다.
    - 리액트 16.3 버전에 등장한 Context API 그거라도 활용하는게 좋을 듯..(나중에 써먹어봐야지)
    - 로그아웃, Edit 기능 구현해보자.

> 2018.09.18
  - title : Edit & LogOut Test
  - content : 
    - 정보수정, 로그아웃 기능 구현
    - 이메일 로그인 기능 삭제 
    - Test OK
  - idea :
    - 이메일 로그인 기능은 이메일 중복을 방지하거나, 아니면 이메일로 토큰 받는 기능 같은거? 써야될 것 같은데,
    - 이메일 중복방지는 이미 아이디 중복방지랑 똑같은 방법일 것 같으니 쿨하게 생략했다.
    - 회원탈퇴 기능 정리하자.
    - 새로고침해도 로그인 남기는 방법 좀 더 찾아보기.

> 2018.09.20
  - title : Delete Test
  - content :
    - Edit 에서 삭제기능 구현
    - Test Ok
  - idea :
    - 세션을 유지하려고 찾아보니.. 뭔가 이렇게 코드를 짜면 안되는 것 같은 기분이 드는데..
    - 로그인 세션 유지하는 방법을 고민해보자.