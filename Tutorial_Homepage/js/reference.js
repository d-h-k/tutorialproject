const notionInfo = [
  {
    "name" : "Paullab Wiki",
    "image" : "./images/notions/paullab_wiki.png",
    "contents":"공부하시면서 정리하고 싶었던 부분을 Paullab Wiki에 정리해 주세요!",
    "wiki" : "http://paullabedu.synology.me/dokuwiki"
  },
  {
    "name" : "[개정판]메모혁신 Notion(노션) 활용 가이드",
    "image" : "./images/notions/notion_guide.png",
    "contents":"메모작성부터 협업까지 노션으로 시작하세요!",
    "link" : "https://www.notion.so/bootcampisland/Bootcamp-Island-Home-7ada10f07c384f78b4cf5402246b96e4",
    "bookstore":"https://ridibooks.com/books/2773000038?_s=search&_q=%EC%9D%B4%ED%98%B8%EC%A4%80"
  },
  {
    "name" : "실전 예제로 살펴보는 PyQt Tutorial",
    "image" : "./images/notions/pyqt.png",
    "contents":"PyQt를 이용하여 Python GUI 프로그래밍 세계에 빠져봅시다!",
    "link" : "https://www.notion.so/pyqt/PyQt-5-Lecture-62b4f0d6c6984efea9f1b1c7d3e315ae",
    "bookstore":"https://ridibooks.com/books/2773000036?_s=search&_q=%EC%9D%B4%ED%98%B8%EC%A4%80"
  },
  {
    "name" : "생애 첫 SQL With 제코베",
    "image" : "./images/notions/my_first_sql.jpg",
    "contents":"생애 첫 SQL, 제코베와 함께 배워봐요!",
    "link" : "https://www.notion.so/SQL-With-1da2d84c3bf8435d9b879b5d1d911acd",
    "bookstore":"https://ridibooks.com/books/2773000037?_s=search&_q=%EC%9D%B4%ED%98%B8%EC%A4%80"
  },
  {
    "name" : "2020 Jeju Coding Basecamp",
    "image" : "./images/notions/jeju_coding_basecamp.jpg",
    "contents":"서비스 기획부터 런칭까지 같이 해봅니다.",
    "link" : "https://www.notion.so/jejucodingcamp/Jeju-Coding-Basecamp-Home-ff529a96a4e5497eaadd7c5b12b60328",
    "bookstore":"https://ridibooks.com/books/2773000035?_s=search&_q=%EC%82%AC%EB%8F%84%EC%B6%9C%ED%8C%90"
  },
  {
    "name" : "Python Bootcamp 얕은물",
    "image" : "./images/notions/python_bootcamp.png",
    "contents":"위니브즈와 함께 Python을 가볍고 넓게 알아봅시다!",
    "link" : "https://www.notion.so/shallowpython/6e5d012e159d4e3fa3fe6ca8566d9e22?v=b73c91efc98c46e49158156a5927a4fd",
    "bookstore":"https://ridibooks.com/books/2773000034?_s=search&_q=%EC%82%AC%EB%8F%84%EC%B6%9C%ED%8C%90"
  },
  {
    "name" : "눈떠보니 코딩테스트 전날",
    "image" : "./images/notions/coding_test.jpg",
    "contents":"위니브즈와 함께 코딩 테스트를 준비해봅시다! ",
    "link" : "https://www.notion.so/a5a0fafe306e4cb78ec4476a272d156d?v=e116f6cdc6e34075bf8e4c0e56429a26"
  },
  {
    "name" : "30분 데이터분석 무료 요약 강좌 시즌2",
    "image" : "./images/notions/30minute.jpg",
    "contents":"python, numpy, pandas, matplotlib, Plotly, crawing의 기초 개념부터 데이터 분석까지!",
    "link" : "https://www.notion.so/30-f20d59b2401c4404b6cd1ee3a31556d1",
    "bookstore":"https://ridibooks.com/books/2773000033?_s=search&_q=%EC%82%AC%EB%8F%84%EC%B6%9C%ED%8C%90"
  },
  {
    "name" : "제주 하간디이신 데이터들 Python으로 몬딱 분석해불게",
    "image" : "./images/notions/jeju_python.jpg",
    "contents":"제주 내 많은 데이터들을 Python으로 모두 분석해보아요!",
    "link" : "https://www.notion.so/1-1-4018be0e04d44e31905edab67627e7e9",
    "link2" : "https://www.notion.so/1-2-cb4e62f6f62b4c11b052fa16638c484c",
    "bookstore":"https://ridibooks.com/books/2773000032?_s=search&_q=%EC%82%AC%EB%8F%84%EC%B6%9C%ED%8C%90"
  },
  {
    "name" : "직접 만드는 노션 템플릿 BEST 7선",
    "image" : "./images/notions/notion_template.png",
    "contents":"노션 템플릿을 쉽게 만들어보세요!",
    "link" : "https://www.notion.so/notiontemplatesample/Notion-Template-Sample-Best-7-part-1-15e07741a6144905b4d27c09a739c979",
  },
  {
    "name" : "Web Animation With 냥이집사",
    "image" : "./images/notions/web_animation.jpg",
    "contents":" HTML, CSS, JS를 이용하여 동적인 페이지를 만들어보아요!",
    "link" : "https://www.notion.so/cssanimation/Web-Animation-1-css-Animation-ac27d0e7a8af46268275bca9a5165844",
    "link2" : "https://www.notion.so/jsanimation/Web-Animation-2-js-Animation-b464d8596c9a4a229fe2bb3014fa7b4e",
    "bookstore":"https://ridibooks.com/books/2773000026?_s=search&_q=%EC%82%AC%EB%8F%84%EC%B6%9C%ED%8C%90"
  },
  {
    "name" : "Python 100제 1부",
    "image" : "./images/notions/code_festival_python_01.jpg",
    "contents":"파이썬으로 푸는 100개의 코딩 문제 - 1부 (1-50번)",
    "link" : "https://www.notion.so/pythonworkbook/Python-100-6ee1860ce29a41bc8eb6b9cfa7d7f06c",
    "bookstore":"https://ridibooks.com/books/2773000025?_s=search&_q=%EC%82%AC%EB%8F%84%EC%B6%9C%ED%8C%90"
  },
  {
    "name" : "Python 100제 2부",
    "image" : "./images/notions/code_festival_python_02.jpg",
    "contents":"파이썬으로 푸는 100개의 코딩 문제 - 2부 (51-100번)",
    "link" : "https://www.notion.so/pythonworkbook/Python-100-6ee1860ce29a41bc8eb6b9cfa7d7f06c",
    "bookstore":"https://ridibooks.com/books/2773000028"
  },
  {
    "name" : "Javasciprt 100제 1부",
    "image" : "./images/notions/code_festival_javascript_01.jpg",
    "contents":"자바스크립트로 푸는 100개의 코딩 문제 - 1부 (1-50번)",
    "link" : "https://www.notion.so/JS-100-94d97d294dd14c9b911a02c840fa9f2d",
    "bookstore":"https://ridibooks.com/books/2773000029"
  },
  {
    "name" : "Javasciprt 100제 2부",
    "image" : "./images/notions/code_festival_javascript_02.jpg",
    "contents":"자바스크립트로 푸는 100개의 코딩 문제 - 2부 (51-100번)",
    "link" : "https://www.notion.so/JS-100-94d97d294dd14c9b911a02c840fa9f2d",
    "bookstore":"https://ridibooks.com/books/2773000031"
  },
  {
    "name" : "업무자동화 with GDG Jeju",
    "image" : "./images/notions/ai.jpg",
    "contents":"인공지능을 활용한 업무자동화 With Google Developers Group JEJU",
    "link" : "https://www.notion.so/with-GDG-Jeju-dc090288728d4ed581dfeac08dc62b5a",
    "bookstore":"https://ridibooks.com/books/2773000022?_s=search&_q=%EC%82%AC%EB%8F%84%EC%B6%9C%ED%8C%90"
  },

    //추가- books 출판정보 포함
  {
    "name" : "튜토리얼로 배우는 HTML&CSS",
    "image" : "./images/books/tutorial_html_css.jpg",
    "contents":"튜토리얼을 통해 일단 만들어 봅시다!",
    "bookstore":"https://ridibooks.com/books/2773000005?_s=search&_q=%EC%82%AC%EB%8F%84%EC%B6%9C%ED%8C%90"
  },
  {
    "name" : "제주문학동인지 옴따 2017 여름호",
    "image" : "./images/books/omdda.jpg",
    "contents":"오픈컬리지 출판 프로젝트로 시작된 문학 계간지 입니다.",
    "bookstore":"https://ridibooks.com/books/2773000003?_s=search&_q=%EC%82%AC%EB%8F%84%EC%B6%9C%ED%8C%90"
  },
  {
    "name" : "프로그래머 출판 가이드",
    "image" : "./images/books/publishing_guide_for_programmer.jpg",
    "contents":"책을 쓰려고 마음을 먹었거나 이미 블로그를 통해 글을 쓰고 있는 프로그래머 분들에게 권해드립니다.",
    "bookstore":"https://ridibooks.com/books/2773000014?_s=search&_q=%EC%82%AC%EB%8F%84%EC%B6%9C%ED%8C%90"
  },
  {
    "name" : "네팔, 그냥 네팔",
    "image" : "./images/books/nepal.jpg",
    "contents":"제주에 살고 있는 작가는 여행하기를 즐겨합니다. 그 중 네팔을 여행하며 기술한 것을 묶어 포토 에세이로 출판합니다.",
    "bookstore":"https://ridibooks.com/books/2773000019?_s=search&_q=%EC%82%AC%EB%8F%84%EC%B6%9C%ED%8C%90"
  },
  {
    "name" : "실습으로 배우는 SQL injection",
    "image" : "./images/books/training_sql_injection.jpg",
    "contents":"다양한 SQL injection 의 원리를 설명하고 있습니다.",
    "bookstore":"https://ridibooks.com/books/2773000024?_s=search&_q=%EC%82%AC%EB%8F%84%EC%B6%9C%ED%8C%90"
  },
  {
    "name" : "하드웨어 초보자 가이드",
    "image" : "./images/books/hardware_guide.jpg",
    "contents":" 하드웨어에 대한 배경지식을 쌓고 싶은 분들 혹은 컴퓨터를 구매하고자 하는데 어려움을 겪는 분에게 추천합니다.",
    "bookstore":"https://ridibooks.com/books/2773000027?_s=search&_q=%EC%82%AC%EB%8F%84%EC%B6%9C%ED%8C%90"
  },
  {
    "name" : "여행블로그 튜토리얼로 배우는 Bootstrap 4.1.0",
    "image" : "./images/books/tutorial_bootstrap4_1_0.jpg",
    "contents":" HTML, CSS를 막 끝낸 분과 프론트엔드 개발자 없이 웹 서비스를 개발해보고 싶은 백엔드 개발자분에게 추천해드립니다. ",
    "bookstore":"https://ridibooks.com/books/2773000013?_s=search&_q=%EC%82%AC%EB%8F%84%EC%B6%9C%ED%8C%90"
  },
  {
    "name" : "xlsxwriter 튜토리얼로 배우는 Python 엑셀 프로그래밍",
    "image" : "./images/books/tutorial_python_xlsxwriter.jpg",
    "contents":" 빅데이터를 가공하여 엑셀로 가시화 시키기 원하는 업무 담당자와 단순 업무를 Python을 이용하여 자동화 시키려 하는 업무 담당자에게 추천해드립니다.",
    "bookstore":"https://ridibooks.com/books/2773000020?_s=search&_q=%EC%82%AC%EB%8F%84%EC%B6%9C%ED%8C%90"
  },
  {
    "name" : "구축해보지 않고는 알 수 없는 암호화 화폐 채굴 가이드",
    "image" : "./images/books/cryptocurrency_mining_guide.jpg",
    "contents":"암호화 화폐(가상화폐), 블록체인, 채굴(Mining)에 대한 개념과 실제 얼마나 수익성이 되는지를 기기별로 분석합니다.",
    "bookstore":"https://ridibooks.com/books/2773000009?_s=search&_q=%EC%82%AC%EB%8F%84%EC%B6%9C%ED%8C%90"
  },
  {
    "name" : "코딩도장 튜토리얼로 배우는 Python 1편 object",
    "image" : "./images/books/tutorial_python_object.jpg",
    "contents":"빅데이터 분석, 머신러닝, 웹 개발 등 다양하게 쓰이는 Python을 예제를 통해 배워보세요.",
    "bookstore":"https://ridibooks.com/books/2773000007?_s=search&_q=%EC%82%AC%EB%8F%84%EC%B6%9C%ED%8C%90"
  },
  {
    "name" : "코딩도장 튜토리얼로 배우는 python 2편 제어문",
    "image" : "./images/books/tutorial_python_control.jpg",
    "contents":"빅데이터, 머신러닝, 웹 개발 등 다양하게 사용되는 Python을 예제를 통해 배워보세요.",
    "bookstore":"https://ridibooks.com/books/2773000008"
  },
  {
    "name" : "코딩도장 튜토리얼로 배우는 Python 문제풀이",
    "image" : "./images/books/tutorial_python_explanation.jpg",
    "contents":"Python 문법을 이제 막 끝낸 분에게 추천해 드립니다.",
    "bookstore":"https://ridibooks.com/books/2773000011?_s=search&_q=%EC%82%AC%EB%8F%84%EC%B6%9C%ED%8C%90"
  },
  {
    "name" : "여행블로그 튜토리얼로 배우는 Django 2.1 with 구름IDE and Bootstrap 4.1.0",
    "image" : "./images/books/tutorial_groomide_bootstrap4_1_0.jpg",
    "contents":" Django로 간단한 여행블로그를 만들면서 Django에 대해 익히게 되어있는 튜토리얼 책입니다.",
    "bookstore":"https://ridibooks.com/books/2773000012?_s=search&_q=%EC%82%AC%EB%8F%84%EC%B6%9C%ED%8C%90"
  },
  {
    "name" : "Javascript Tutorials",
    "image" : "./images/books/tutorial_javascript.jpg",
    "contents":"간단한 튜토리얼을 통해 Javascript로 웹이 동작하게 만들어 보세요.",
    "bookstore":"https://ridibooks.com/books/2773000017?_s=search&_q=%EC%82%AC%EB%8F%84%EC%B6%9C%ED%8C%90"
  },
  {
    "name" : "블록체인으로 구축하는 투표시스템 with 구름IDE and Ruby on rails",
    "image" : "./images/books/voting_system_built_with_blockchain.jpg",
    "contents":"블록체인으로 무언가 만들어 보고 싶은 주니어 개발자 개발자에게 추천합니다",
    "bookstore":"https://ridibooks.com/books/2773000010?_s=search&_q=%EC%82%AC%EB%8F%84%EC%B6%9C%ED%8C%90"
  },
  {
    "name" : "타노스의 건틀릿 알고리즘 With Python",
    "image" : "./images/books/tutorial_thanos_gauntlets_algorithm_with_python.jpg",
    "contents":"타노스의 핑거스냅 문제를 다양한 시각으로 풀어보며 Python에 보다 깊게 다가가 보세요.",
    "bookstore":"https://ridibooks.com/books/2773000015?_s=search&_q=%EC%82%AC%EB%8F%84%EC%B6%9C%ED%8C%90"
  },
  {
    "name" : "BLOCKCHAIN DAPP PLATFORMS FOR JEJU",
    "image" : "./images/books/blockchain_dapp_platforms_for_jeju.jpg",
    "contents":"블록체인의 개념부터 활용방안, 제주에 응용 가능한 아이디어, DApp 구축까지 다루고 있습니다. ",
    "bookstore":"https://ridibooks.com/books/2773000018?_s=search&_q=%EC%82%AC%EB%8F%84%EC%B6%9C%ED%8C%90"
  },
  {
    "name" : "JEJU STARTUP MIX",
    "image" : "./images/books/jeju_startup_mix_2020.jpg",
    "contents":"제주 스타트업 대표 9명의 생생한 목소리를 담았습니다.",
    "bookstore":"https://ridibooks.com/books/2773000030?_s=search&_q=%EC%82%AC%EB%8F%84%EC%B6%9C%ED%8C%90"
  },
  {
    "name" : "프로그래머의 글쓰기 도구",
    "image" : "./images/books/programmer_writting_tool.jpg",
    "contents":"DocuWiki부터 플랫폼, Atom + markdown에 이르기까지 프로그래머가 글을 쓰는데 필요한 툴을 정리하였습니다.",
    "bookstore":"https://ridibooks.com/books/2773000016?_s=search&_q=%EC%82%AC%EB%8F%84%EC%B6%9C%ED%8C%90"
  },
  {
    "name" : "러플 튜토리얼로 배우는 Python",
    "image" : "./images/books/rurple_tutorial_python.jpg",
    "contents":"파이썬 코드로 로봇을 제어하면서 코딩을 쉽게 배울 수 있는 러플은 쉽게 언어기반 프로그래밍을 이해할 수 있도록 도와줍니다.",
    "bookstore":"https://ridibooks.com/books/2773000001?_s=search&_q=%EC%82%AC%EB%8F%84%EC%B6%9C%ED%8C%90"
  }
];

// Local JSON 파일 불러오기
const notionStr = JSON.stringify(notionInfo);
const notionData = JSON.parse(notionStr);

const body = document.querySelector("body");
const waves = document.querySelector(".waves");
const focusNotion = document.querySelector(".focus__notion");
const notionContainer = document.querySelector('.notion__container')

//배경요소
const backgroundCloudy = document.querySelector('.background__cloudy');
const ship = document.querySelector('.ship');
const javadog = document.querySelector('.javadog');
const javadogImg = document.querySelector('.javadog img');
const javadogLeftHand = document.querySelector('.javadog_left_hand');
const javadogRightHand = document.querySelector('.javadog_right_hand');
const fishingRod = document.querySelector('.fishing_rod');
const fishingLine = document.querySelector('.fishing_line');

function scrollTop() {
if(window.scrollY!=0)
{
    setTimeout(function() {
       window.scrollTo(0,window.scrollY-30);
        scrollTop();
    }, 2);
   }
}

function javadogAnimationOn(){
  scrollTop();
  notionContainer.style.pointerEvents = "none";
  javadogImg.src = "./images/animation_javadog_tired.png";
  javadog.classList.add('javadog--animation');
  ship.classList.add('ship--animation');
  javadogLeftHand.classList.add('javadog_left_hand--animation');
  javadogRightHand.classList.add('javadog_right_hand--animation');
  fishingRod.classList.add('fishing_rod--animation');
  fishingLine.classList.add('fishing_line--animation');
}

function notionAnimationOn(){
  let notion = document.querySelectorAll('.notion');
  for(let i=0; i<notion.length; i=i+2){
    notion[i].classList.add('notion--animation--odd');
  }
  for(let i=1; i<notion.length; i=i+2){
    notion[i].classList.add('notion--animation--even');
  }
}
function notionAnimationOff(){
  let notion = document.querySelectorAll('.notion');
  for(let i=0; i<notion.length; i=i+2){
    notion[i].classList.remove('notion--animation--odd');
  }
  for(let i=1; i<notion.length; i=i+2){
    notion[i].classList.remove('notion--animation--even');
  }
}

function javadogAnimationOff(){
  notionContainer.style.pointerEvents = "auto";
  javadogImg.src = "./images/animation_javadog_fishing.png";
  javadog.classList.remove('javadog--animation');
  ship.classList.remove('ship--animation');
  javadogLeftHand.classList.remove('javadog_left_hand--animation');
  javadogRightHand.classList.remove('javadog_right_hand--animation');
  fishingRod.classList.remove('fishing_rod--animation');
  fishingLine.classList.remove('fishing_line--animation');
}

function fishingAnimation(num){
  backgroundCloudy.classList.add('background__cloudy--animation');
  javadogAnimationOn();
  notionAnimationOn();
  javadog.addEventListener("animationend", function(){
    backgroundCloudy.classList.remove('background__cloudy--animation');
    javadogAnimationOff();
    notionAnimationOff();
    notionSelect(num);
  });
}

//notion data html에 뿌리기
function notionSetting(){
  let notionContents = "";;
  for(var i=0; i<notionData.length;i++){
      var notion = notionData[i];
      notionContents = notionContents +
        `<div class="notion">
          <div class="notion__info">
            <img src='${notion.image}' alt='${notion.name}' />
          </div>
        </div>`;
  }
  notionContainer.innerHTML = notionContents;
}

function notionSelect(num){
  let notion="";
  var notionAbout = notionData[num];
  notion = notion +
  `<div class="notion__detail">
    <div class="notion__front">
      <img src='${notionAbout.image}' alt='${notionAbout.name}' />
    </div>
    <div class="notion__back">
      <h1>${notionAbout.name}</h1>
      <h2>"${notionAbout.contents}"</h2>
      <div class="buttons">`;
        // link,link2와 bookstore 모두 존재할때
        if( notionAbout.link&&notionAbout.link2&&notionAbout.bookstore ){
          notion = notion +`
          <a href='${notionAbout.link}' target='_blank'><img src="./images/icon_notion.png" alt="노션" />노션 1부 바로가기</a>
          <a href='${notionAbout.link2}' target='_blank'><img src="./images/icon_notion.png" alt="노션" />노션 2부 바로가기</a>
          <a href='${notionAbout.bookstore}' target='_blank'><img src="./images/icon_book.png" alt="책" />책 바로가기</a>
          </div>
          </div>
          </div>`;
        }
        //link와 bookstore 모두 존재할때
        else if( notionAbout.link&&notionAbout.bookstore ){
          notion = notion +`
          <a href='${notionAbout.link}' target='_blank'><img src="./images/icon_notion.png" alt="노션" />노션 바로가기</a>
          <a href='${notionAbout.bookstore}' target='_blank'><img src="./images/icon_book.png" alt="책" />책 바로가기</a>
          </div>
          </div>
          </div>`;
        }
        //bookstore만 존재할때
        else if( notionAbout.bookstore ){
          notion = notion +`
          <a href='${notionAbout.bookstore}' target='_blank'><img src="./images/icon_book.png" alt="책" />책 바로가기</a>
          </div>
          </div>
          </div>`;
        }
        //wiki만 존재할때
        else if( notionAbout.wiki ){
          notion = notion +`
          <a href='${notionAbout.wiki}' target='_blank'>위키 바로가기</a>
          </div>
          </div>
          </div>`;
        }
        //link만 존재할때
        else {
          notion = notion +`
          <a href='${notionAbout.link}' target='_blank'><img src="./images/icon_notion.png" alt="노션" />노션 바로가기</a>
          </div>
          </div>
          </div>`;
        }
  focusNotion.innerHTML = notion;
  const notionDetail = document.querySelector(".notion__detail");
  //wave 효과
  waves.classList.remove("waves--default");
  focusNotion.style.marginTop="-120px";
  focusNotion.style.paddingTop="120px";
  focusNotion.style.top="0px";
  //notion 제외한 영역클릭시 notion 정보화면 닫기
  body.addEventListener('click', clickBodyEvent);
  //notion 클릭시 notion 정보화면 펼쳐지기
  notionDetail.addEventListener('click', spreadClick);
};

//선택한 요소의 인데스 알기
function getElementIndex(element, range) {
  if (!!range) return [].indexOf.call(element, range);
  return [].indexOf.call(element.parentNode.children, element);
}

//notion 정보화면 펼치기
function spreadClick(event){
  const target = event.target;
  const buttons = document.querySelectorAll(".buttons a");
  for(var i=0; i<buttons.length; i++){
    if(target == buttons[i])
      return;
  }
  const notionDetail = document.querySelector(".notion__detail");
  const notionImg = document.querySelector(".notion__front img");
  const notionFront = document.querySelector(".notion__front");
  //notion 펼칠때 이미지 넘기는 효과
  notionDetail.classList.toggle("notion--spread");
  notionImg.classList.toggle("notion__front__img--spread");
  notionFront.classList.toggle("notion__front--spread");
}

// transition 효과가 완료되었는지 감지
function whichTransitionEvent(){
  const el = document.createElement('fakeelement');
  const transitions = {
    'transition'      : 'transitionend',
    'OTransition'     : 'oTransitionEnd',
    'MozTransition'   : 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd'
  };
  for (const t in transitions) {
    if (el.style[t] !== undefined){
      return transitions[t];
    }
  }
}

function reset(){
  waves.classList.remove("waves--down");
  waves.classList.add("waves--default");
}

function clickBodyEvent(event) {
    var notionDetail = document.querySelector('.notion__detail');
    var target = event.target;
    // notion 영역 이면 pass
    if(target == focusNotion){
      if(target == notionDetail)
        return ;
      else{
        focusNotion.classList.remove("focus__notion--clicked");
        focusNotion.style.top = "150%";
        focusNotion.addEventListener(whichTransitionEvent(), function() {
            waves.classList.add("waves--default");
        });
      }
    }
};

//음악 재생
// const bgm = document.querySelector('.bgm');
const bgm_button_play = document.querySelector('.bgm__button--play');
const bgm_button_pause = document.querySelector('.bgm__button--pause');
const portraitMedia = window.matchMedia( 'only screen and (orientation: portrait)' );

const audio = new Audio();
audio.src = "https://drive.google.com/uc?export=download&id=1XelfpMJY5-2xlYWXCWXT2zqYmKNnukU7";
audio.autoplay = true;
audio.loop = true;

if(audio.paused) {
  bgm_button_play.classList.add('bgm__button--disactive');
  bgm_button_pause.classList.add('bgm__button--active');
}

function musicPlay(){
  if(audio.paused) {
    audio.play();
    document.removeEventListener('click', musicPlay);
    bgm_button_play.classList.add('bgm__button--disactive');
    bgm_button_pause.classList.add('bgm__button--active');
  } else {
    audio.pause();
    audio.currentTime = 0;
    bgm_button_play.classList.remove('bgm__button--disactive');
    bgm_button_pause.classList.remove('bgm__button--active');
  }
}
window.onresize = function() {
  if(portraitMedia.matches == true) {
    console.log('stop');
    musicStop();
  }
};
bgm_button_play.addEventListener('click', musicPlay);
document.addEventListener('click', musicPlay);
bgm_button_pause.addEventListener('click', musicPlay);

notionSetting();
//notion 클릭시 해당하는 데이터 선택하기
[].forEach.call(document.querySelectorAll('.notion__container .notion'), function(el) {
	el.addEventListener('click', function() {
		let num = getElementIndex(document.querySelectorAll('.notion'), el);
    fishingAnimation(num);
  });
});
