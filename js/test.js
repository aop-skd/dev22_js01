// ここからコードを書きます🤗
// alert(111);

// 演習1
// Console上でSyntaxErrorとでてきたら打ち間違い
console.log("はじめてのjavascript");

// 演習２
console.log(23+5, "1問目");
console.log(2000-1800, "2問目");
console.log("18+5", "3問目");

// 演習3
const ohori = "おおほり";
const name = "もりた";
const num = 1;

console.log(ohori);

console.log(name);
console.log(num);

// if分の練習＿条件分岐

const point = 8;
if(point >= 80){
    console.log("すばらしい！おめでとう")
}
else{
    console.log("もう少しがんばりましょう")
};

// おみくじ
const random = Math.floor( Math.random() *5);
if(random === 0){
    console.log("大吉")
}else if(random === 1){
    console.log("中吉")
}else if(random === 2){
    console.log("小吉")
}
else if(random === 3){
    console.log("凶")
}
else if(random === 4){
    console.log("大凶")
};

