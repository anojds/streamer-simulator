 var donaname = ["엄준식","하하",".",".",".",".",".",".",".","stayme","잼","민이","귀멸의 칼날 좋아","와앙","제주산 흑돼지","눈부셔","흐헥","히히히히히힣ㅎㅎ","관종","ㅇㅅㅇ","골드 가는중","터미네이터","ㅗ",".","샌즈","tv","똥꾸빵꾸","다이아찍음ㅅㄱ","ehddbs","너.무.웃.기.다","일루미나티","일루","turbo","stepkr","뤠퍼","췍췍","롤린","제로투","부아아아ㅏㅏㅏ아ㅏㅇ","도깨비","기린","돼지"]
 var donatext = ["zzz","방송 그럭개 하는거 아닌데","오옹","좋다","ㅋㅋㅋ","ㅋ","ㅋㅋ","ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ","미쳤다","ㅁㅊㅋㅋㅋㅋ","솨랑해요","샌즈T브이 구독","제이름불러주세요","후원하고싶다","오늘 뭐해요?","지금 뭐하는거에요?","ㅎㅎ","시청자 겁나 많네","게임해주세요","노래 해주세요","?","ㄴㄴ","먹방해요","나 심심해","밥 오늘 머먹음?","으..","대박","헐","무서운 사람이네","난 싫오ㅓ","씁","맞아","아 배고파","화이팅","ㅎㅇㅌ","아앜ㅋㅋ","...","아쉽다","돈낭비야","ㅇㅋㅇㅋ"]
 var donawon = ["1,000","1,000","1,000","1,000","1,000","1,000","10,000","100,000"]
 var donationcount = 0
 var donationAudio = new Audio("asset/music/The_award.mp3");
 function div_show() {
  document.getElementById("donation").style.display = "block";
 }

 function div_hide() {
  document.getElementById("donation").style.display = "none";
 }

 

 function showDonation() {
    var donationran = Math.floor(Math.random()*(20-1+1)) + 1;
    var donationnameran = Math.floor(Math.random() * donaname.length);
    var donationtextran = Math.floor(Math.random() * donatext.length);
    var donationwonran = Math.floor(Math.random() * donawon.length);
    if (donationran == 1) {
        div_show()
        document.getElementById("donationName").innerHTML = donaname[donationnameran];
        document.getElementById("donationText").innerHTML = donatext[donationtextran];
        document.getElementById("moneyName").innerHTML = donawon[donationwonran];
        donationcount = 6
        donationAudio.play();
    }
}
    function donationcountf() {
       if(donationcount == 0) {
           div_hide()
       } else {
           donationcount = donationcount - 1
       }
 }
 let countdown = setInterval(donationcountf, 1000);
 let viewcountstart = setInterval(showDonation, 1000);