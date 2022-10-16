var fish = document.getElementById('fish');
var number = document.getElementById('jia');
var text = document.getElementById('text');
var s = document.getElementById('setting');
var b1 = document.getElementById('b1');
var su1 = document.getElementById('sumtext');
function setNumber(num){
    num = document.getElementById('setNum').value;
    number.innerHTML=num;
    // console.log(num);
    b1.style.display = "block";
    s.style.display = "none";
    su1.style.display = "block";
}
function show(){ 
    setTimeout(function(){
        s.style.display = "block";
        b1.style.display = "none";
        su1.style.display = "none";
    },100)
}

function knock(){
    fish.style.transform='rotate(10deg) scale(70%)';
    fish.style.webkitTransform='rotate(10deg) scale(70%)';
    var k = document.getElementById('knock');
    k.play();
    up();
    add();
    setTimeout(function(){
    fish.style.transform='rotate(3deg) scale(75%)';
    fish.style.webkitTransform='rotate(3deg) scale(75%)';
    },100);
    if(ss>=9999){
        document.getElementById('foottext').style.display="block";
    }   
}
var ss = 0;
function add(){
    var sumed = document.getElementById('sum');
    var dd = document.getElementById('setNum').value;
    ss = ss + Number(dd);
    sumed.innerHTML = ss;
}
function up(){
    text.style.display="block";
    var anima = window.getComputedStyle(text,null).animation;
    // console.log(anima);
    switch(anima){
        case "1s ease 0s 1 normal none running up":
            text.style.animation = "0.8s ease 0s 1 normal none running up2";
            break;
        case "0.8s ease 0s 1 normal none running up2":
            text.style.animation = "1s ease 0s 1 normal none running up";
            break;
    }
}
