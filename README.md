# AllBareun
<p align="center">
<img align="center" style="margin:0 auto;" src="https://github.com/Joong-eon/AllBareun/blob/master/src/main/resources/static/images/all.png"/>
  
  <h2 align="center">TEUM</h2>
</p>

## 📑 프로젝트 소개
  - [x] 새해맞이 목표 달성 사이트
    
    탄생 배경
      - 신년을 맞아 새로운 목표들을 세우게 되나 번번이 1달을 못 채우고 끝나는 경우가 많다.
      - 이에 목표 달성 과정을 도와줄 수 있는 사이트가 있으면 좋겠다 생각하게 되어 프로젝트를 시작했다.
      
  - [x] 1차 프로젝트와는 다르게 수업시간에 배운 한에서 라이브러리와 프레임워크를 사용하려 backend에서 Spring Boot를 최대한 활용하였습니다.

  
## 🛠 사용 기술
| Front-End | Back-End | DataBase | Tool |
| --- | --- | --- | --- | --- |
| HTML5<br>CSS3<br>ES6 | Mybatis<br>Spring | MySQL | Git<br>Trello<br>Kakao Oven<br>Photoshop <br>Spring Boot |

## 📅 개발 기간
![프로젝트일정(올바른생각)](https://github.com/cyon13/AllBareun/blob/master/src/main/resources/static/images/2%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EC%9D%BC%EC%A0%95.png)

## 📊 E-R Diagram
![E-R Diagram](https://github.com/cyon13/AllBareun/blob/master/src/main/resources/static/images/ERwin.png)

## 📖 Issues 관리
<img width="1516" src="https://github.com/cyon13/AllBareun/blob/master/src/main/resources/static/images/%EC%9D%B4%EC%8A%88%EA%B4%80%EB%A6%AC.png">

## 🎞 실행 화면

✅ [1] 메인화면 : 골든타임, 제안하기, 이벤트, 숙소등록 등 UI를 배치한 메인 페이지입니다.

![main](https://user-images.githubusercontent.com/65852909/103154683-576bec80-47dc-11eb-97b4-012b42eb20a7.gif)

✅ [2] 회원가입 : 여행자, 숙박업체 등록을 위한 회원가입 페이지입니다. 실시간 폼데이터 유효성 검사 및 AJAX를 통한 이메일 중복체크 기능을 구현하였습니다.

![signup](https://user-images.githubusercontent.com/65852909/103154728-b7629300-47dc-11eb-9a92-d9c25eafeca9.gif)

✅ [3] EMAIL & PASSWORD 검색 및 로그인 : 로그인을 위한 이메일, 비밀번호 분실 시 찾을 수 있도록 검색 기능(AJAX)을 구현하였습니다.

![findIdPwd](https://user-images.githubusercontent.com/65852909/103154759-0b6d7780-47dd-11eb-855f-818bc47a28ef.gif)

✅ [4] 제안(여행자) : 여행자가 원하는 장소, 일시, 인원, 가격 등을 제안할 경우, 해당 지역에 있는 모든 숙소에 제안 정보 전송하는 기능을 구현하였습니다.

![offer](https://user-images.githubusercontent.com/65852909/103154786-5ab3a800-47dd-11eb-8c43-f7d1274e0b23.gif)

✅ [5] 역제안(숙박업체) : 여행자로부터 받은 제안목록을 확인하고, 제안을 수락하며 여행자가 예약할 수 있도록 방 정보를 전송할 수 있는 기능을 구현하였습니다.

![reverseOffer](https://user-images.githubusercontent.com/65852909/103154849-da417700-47dd-11eb-9543-34ee89e97ab3.gif)

✅ [6] 역제안 받은 숙소 예약하기(여행자) : 내가 보낸 제안에 대한 역제안을 수락하고 예약하는 기능을 구현하였습니다.

![제안한것을 예약하는 gif임](https://user-images.githubusercontent.com/65852909/103154876-2ee4f200-47de-11eb-93df-40186ecf8346.gif)

✅ [7] 숙소리스트 훑어보기 : 숙소 타입(호텔, 모텔 등)별로 숙소리스트 검색 및 지역별 숙소리스트 검색 기능을 구현하였습니다.

![accList](https://user-images.githubusercontent.com/65852909/103154941-a1ee6880-47de-11eb-9079-c3f61349c513.gif)

✅ [8] 예약하기(기본) : 숙소리스트 검색 후, 원하는 숙소를 선택하여 예약하는 기능을 구현하였습니다.

![reservation](https://user-images.githubusercontent.com/65852909/103154962-e24de680-47de-11eb-87f7-e34e28c7cad6.gif)

✅ [9] 예약한 숙소에 리뷰 남기기 : 예약한 숙소에 리뷰를 남기는 기능을 구현하였습니다. 리뷰에는 별점과 코멘트를 남길 수 있습니다.

![review](https://user-images.githubusercontent.com/65852909/103154996-204b0a80-47df-11eb-8682-1872ccdb6e48.gif)

✅ [10] 골든타임 : 정해진 기간에 할인을 적용하고 있는 숙소들의 리스트를 확인할 수 있습니다. 해당 숙소를 소유하고있는 업체는 골든타임을 등록 및 해지할 수 있습니다.

![goldentime](https://user-images.githubusercontent.com/65852909/103155060-8f286380-47df-11eb-9f6f-e6074676cf25.gif)

✅ [11] 이벤트 : 현재 진행중인 이벤트 목록을 확인할 수 있는 페이지 입니다.

![event](https://user-images.githubusercontent.com/65852909/103155074-b3844000-47df-11eb-857a-3c707dbf87f1.gif)

✅ [12] 기타 : 이외에도 공지사항관리, 1:1문의, 관리자페이지(숙소등록관리,회원관리,이벤트&공지사항관리,골든타임관리) 기능도 구현 하였습니다.
## 💻 개발자
| <img src="https://avatars2.githubusercontent.com/u/64012038?s=400&u=c1bf92ce021077a9d78d8418315c938e797fb238&v=4" width="55" height="55"><br>[신중언](https://github.com/Joong-eon) | <img src="https://avatars.githubusercontent.com/u/35316595?s=400&v=4" width="55" height="55"><br>[구본율](https://github.com/cyon13) | <img src="https://avatars.githubusercontent.com/u/55617281?s=400&u=45166515684d080b5782457babcc6920191823ee&v=4" width="55" height="55"><br>[김현지](https://github.com/iamhyunji) | <img src="https://avatars.githubusercontent.com/u/54495841?s=400&v=4" width="55" height="55"><br>[임혜영](https://github.com/HYEYOUNGLIM) |
| --- | --- | --- | --- |

## Contribution
  - 프로젝트 기획
  - [x] Front-end
      -인덱스 페이지
      -로그인 페이지
      -회원가입 페이지
      -아이디 찾기 페이지
      -비밀번호 찾기 페이지
  - [x] Back-end
      -인덱스 페이지
      -로그인 페이지
      -회원가입 페이지
      -아이디 찾기 페이지
      -비밀번호 찾기 페이지
      
## 개발에 어려웠던 점
  - [x] 스프링 부트가 로그인세션을 알아서 해주니 다른 페이지에서 세션을 주고 받기가 쉽게 생각나지 않았다.
## 느낀점
  - [x] 스프링 부트를 사용하여 로그인을 구현해봤는데, 세션기능이 편리하다는걸 깨달았다.
  - [x] 배운걸 직접 사용하지 않으면 배우지 않은 것과 같다는 생각이 들었다.
## 💼Download
  - git clone https://github.com/cyon13/AllBareun
