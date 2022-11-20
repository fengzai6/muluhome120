var index = 1;
var contentObj = document.getElementsByClassName('content')
function next(){
    var hei = window.innerHeight;
    console.log(hei)
    var pageObj = document.querySelector('.page');
    if(hei*index < contentObj.length*hei){
        pageObj.style = `top: -${hei*index}px;`;
        index++;
    }
}
function toTop(){
    var pageObj = document.querySelector('.page');
    pageObj.style = `top: 0px;`;
    index = 1;
}