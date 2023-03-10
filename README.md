<div align="center">

# Wanted Pre-Onboarding Challenge FE 1

<b>필수 지식인 CRUD를 React에서 TS, React-Query 등을 활용하여 구현해보자.</b>

<p align="center">
  <img src="https://img.shields.io/badge/React-v18.2.0-61DAFB?style=flat&logo=React&logoColor=white&style=for-the-badge"/> 
  <img src="https://img.shields.io/badge/Typescript-v4.9.4-3178C6?style=flat&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/React%20Query-v4.20.4-FF4154?style=flat&logo=React Query&logoColor=white"/>
  <img src="https://img.shields.io/badge/Axios-v1.2.1-5A29E4?style=flat&logo=Axios&logoColor=white"/>
</p>

<br />

</div>

## 📁 폴더 구조

- `assets` : images
- `components`
  - `common` : button, input, typography, header, navbar ...
  - `register` : register ...
  - `todolist` : todolist ...
  - `templates` : layout ...
- `hooks` : custom hooks
- `configs` : api base url
- `styles` : global basic styling
- `types` : login & todo typing
- `utils` : axios fetcher
- `public`: favicon

<br />

## ✔️ 작업 내역

### 1. Login / SignUp

- [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- [ ] 이메일 조건 : 최소 `@`, `.` 포함
- [x] 비밀번호 조건 : 8자 이상 입력
- [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
- [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
- [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

## 2. Todo List

- [ ] 목록 / 상세 영역으로 나누어 구현해주세요
- [x] Todo 목록을 볼 수 있습니다.
- [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
- [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
- [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
- [ ] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요
- [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

<br />

## Reference

- [File Struecture: React-Docs](https://ko.reactjs.org/docs/faq-structure.html)
- [Github content API](https://computer-science-student.tistory.com/297)
