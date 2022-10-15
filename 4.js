var s = 5;
function sub(){
    s = document.getElementById('setStep').value;
    s = parseInt(s);
}
function move(value){
    var box = document.getElementById('box');
    var a = value;
    var b = box.offsetTop;
    var c = box.offsetLeft;
    switch(a){
        case "c1":
            b=b-s;
            box.style.top=b+'px'
            break;
        case "c2":
            b=b+s;
            box.style.top=b+'px'
            break;
        case "c3":
            c = c - s;
            box.style.left=c+'px'
            break;
        case "c4":
            c = c + s;
            box.style.left=c+'px'
            break;
    }
}