//디폴트 변수 선언 (각종 DOM 세팅)
const nav = document.querySelector("#nav");
const nav__largecontainer = document.querySelector(".nav__largecontainer");
const logo__borderline = document.querySelector(".logo__borderline");
const logo__image = document.querySelector(".logo__image");

/*
    &&&&&&   
    &&&&&&                                   
      &&     &&&&&    &&&   &&&   &&&&&      
      &&    &&   &&    &&   &&   &&   &&   
   && &&    &&   &&     && &&    &&   &&&  
    &&&      &&&&& &     &&&      &&&&& &% 

    %%%%%                     %%
   %%%   %    %%%%%   %% %%%      %%%%%%   %%
     %%%     %%   %%  %%%     %%  %%  %%  %%%%%
   %   %%%   %%       %%      %%  %%%%%    %%
    %%%%%     %%%%%   %%      %%  %%       %%%
*/

/*
    스크롤바가 최상위 위치(y좌표)에 있는지 확인하는 함수
    * 최상위 위치는 y좌표가 60이하인 경우라고 정의한다.
*/
const isScrollTop = () => {
    const { scrollY } = window;
    if (scrollY < 60)
        return true;
    return false;
}

// 상단 네비게이션을 커다란(Lg: large)네비바로 적용하는 함수
const showNavLg = () => {
    nav.classList.remove("nav-sm");
    nav.classList.add("nav-lg");
    nav__largecontainer.classList.remove("nav__largecontainer-sm");
    nav__largecontainer.classList.add("nav__largecontainer-lg");
    logo__borderline.classList.remove("opacity-zero");
    logo__image.classList.remove("opacity-zero");
}

// 상단 네비게이션을 작은(Sm: small)네비바로 적용
const showNavSm = () => {
    nav.classList.add("nav-sm");
    nav.classList.remove("nav-lg");
    nav__largecontainer.classList.remove("nav__largecontainer-lg");
    nav__largecontainer.classList.add("nav__largecontainer-sm");
    logo__borderline.classList.add("opacity-zero");
    logo__image.classList.add("opacity-zero");
}

// 스크롤 이벤트를 처리하는 함수
const handleScroll = (e) => {
    if (!isScrollTop())
        showNavSm();
    else
        showNavLg();
};

//자바스크립트 초기 실행 함수
const init = () => {
    window.addEventListener("scroll", handleScroll);
};

//초기 실행 함수 호출
init();