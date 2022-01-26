var startchat = ["ㅎㅇ","gd","오오","시작했다","드뎌","dhdh","1빠","1ㅃ ㅏ","1삐","2빠","3빠","내가 먼저임","내가 먼저라고","아니 얼마나 기다렸는데","왜 지각함?","!!!","!!","!",".","해명해","ㅇㅅㅇ","와 저 생방 처음봐요!!","와저생방처음봐요","abcdef123","샌즈","ㄷㄱㄷㄱ","형 내가 얼마나 보고 싶었느데 ㅠㅠ"]
var chat = ["오옹","좋다","ㅋㅋㅋ","ㅋ","ㅋㅋ","ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ","미쳤다","ㅁㅊㅋㅋㅋㅋ","솨랑해요","샌즈T브이 구독","제이름불러주세요","후원하고싶다","오늘 뭐해요?","지금 뭐하는거에요?","ㅎㅎ","시청자 겁나 많네","게임해주세요","노래 해주세요","?","ㄴㄴ","먹방해요","나 심심해","밥 오늘 머먹음?","으..","대박","헐","무서운 사람이네","난 싫오ㅓ","씁","맞아","아 배고파","화이팅","ㅎㅇㅌ","아앜ㅋㅋ","...","아쉽다","돈낭비야","ㅇㅋㅇㅋ"]
var time = 0
var nameColor = ["#8a2be2","#926700","#337375","#0000ff","#b14e00","#dc0000","#007b00","rgb(201, 52, 133)","rgb(0, 104, 208)","rgb(182, 66, 24)","rgb(138, 43, 226)"]
var username = ["stayme","잼","민이","귀멸의 칼날 좋아","와앙","제주산 흑돼지","눈부셔","흐헥","히히히히히힣ㅎㅎ","관종","ㅇㅅㅇ","골드 가는중","터미네이터","ㅗ",".","샌즈","tv","똥꾸빵꾸","다이아찍음ㅅㄱ","ehddbs","너.무.웃.기.다","일루미나티","일루","turbo","stepkr","뤠퍼","췍췍","롤린","제로투","부아아아ㅏㅏㅏ아ㅏㅇ","도깨비","기린","돼지"]
function CreateChatName(text, color, bold) {
var para = document.createElement("SPAN");
para.innerHTML = text;
para.style.color = color;
    para.style.fontWeight = "bold";
document.getElementById("chatlist").appendChild(para);
}

function CreateChatText(text, color, bold) {
    var para = document.createElement("SPAN");
    para.innerHTML = "<br>" + text + "<br>";
    para.style.color = color;
    document.getElementById("chatlist").appendChild(para);
}

function makeChat() {        
    var startchatrandom = Math.floor(Math.random() * startchat.length);
    var randomcolor = Math.floor(Math.random() * nameColor.length);
    var randomname = Math.floor(Math.random() * username.length);
    var ranchat = Math.floor(Math.random() * chat.length);
    if (time < 10){
        CreateChatName(username[randomname], nameColor[randomcolor]);
        CreateChatText(startchat[startchatrandom], "#000000");
    }else{
        CreateChatName(username[randomname], nameColor[randomcolor]);
        CreateChatText(chat[ranchat], "#000000");
    }

    chatWindow = document.getElementById('chatlist'); 
    var xH = chatWindow.scrollHeight; 
    chatWindow.scrollTo(0, xH);

}

function addTime() {
    time = time + 1;
}
let mInterval = setInterval(makeChat, 150);
let timecount = setInterval(addTime, 1000);