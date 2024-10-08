# Riot API를 이용한 Next js

<table>
<tr>
<td>
  Riot API를 이용한 Next js의 여러가지 캐싱 기법을 사용하여 최적화 방식을 익혀본다.
</td>
</tr>
</table>

## Site

### 챔피언 목록

ISR 이용한 페이지 구현

<img width="1440" alt="스크린샷 2024-10-08 오전 9 21 01" src="https://github.com/user-attachments/assets/951f3b8a-bd40-4ccd-969d-b2ba2aee00d7">


### 아이템 목록

SSG 이용한 정적 패이지 구현

<img width="1440" alt="스크린샷 2024-10-08 오전 9 21 12" src="https://github.com/user-attachments/assets/61b0cb83-ab1e-47ca-9544-8b80fe93cceb">


### 로테이션 목록

CSR 이용한 페이지 구현

<img width="1440" alt="스크린샷 2024-10-08 오전 9 21 24" src="https://github.com/user-attachments/assets/664a95c5-3ff3-4fb6-b532-dce64ff49958">


### 챔피언 디테일

SSR 이용한 동적 페이지 구현

<img width="1439" alt="스크린샷 2024-10-08 오전 9 21 37" src="https://github.com/user-attachments/assets/a8b875da-de84-41da-b5fb-8f67aa0945b9">


<br>

## Feature

- fetch, revalidate 옵션을 통한 ISR 캐싱 전략
- cache: no-store 옵션을 이용한 SSR 동적 렌더링
- cache: force-cache 옵션을 이용한 SSG 정적 렌더링
- CSR, Route Handler를 통한 서버단 데이터 패칭 전략
