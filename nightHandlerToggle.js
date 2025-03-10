// 야간모드 toggle 함수
function nightHandler(){

    if(this.value === 'night'){
        // target.style.backgroundColor='white';
        // target.style.color='black';
        $("body").css("background-color", "white");
        $("body").css("color", "black");
        this.value='day';
    }else{
        // Javascript로 작성
        // target.style.backgroundColor='black';
        // target.style.color='white';

        // Javascript의 라이브러리인 jQuery 활용
        $("body").css("background-color", "black");
        $("body").css("color", "white");
        this.value = 'night';
    }
}