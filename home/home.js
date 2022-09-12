
//---------------------------------
// 找到那些列表开关，设置点击事件
var htmlList = document.getElementsByClassName("csslist")
for(var i in htmlList){
    htmlList[i].onclick = openBox;
}
// 点击事件
function openBox(){

    // 列表点击时，关闭所有列表包括自己所指向的网页
    var htmlHetght = document.getElementsByClassName("right-box2");
    for(var i = 0; i < htmlHetght.length; i++){
        //添加一个循环找check-box2，遇见则改为box
        htmlHetght[i].setAttribute("class", "right-box");
    }

    // 找到里面的列表开关，变为全关
    var uncheck = document.getElementsByClassName("csslist");
    for(var j = 0; j < uncheck.length; j++){
        uncheck[j].checked = false
    }
    //让自己被勾选
    this.checked = true;
    // 找到关键字，并找到指向元素
    var htmlItem = this.getAttribute("with");
    var change = document.getElementById(htmlItem);
    // 改类名为我们要的类名
    change.setAttribute("class", "right-box2");
    
    
}

//外面点击，里面的选择全关
var labelList = document.getElementsByClassName("left-checkbox");
for(var i in labelList){
    labelList[i].onclick=checkd;
}
function checkd(){
    // 找到里面的列表开关，变为全关
    var uncheck = document.getElementsByClassName("csslist");
    for(var j = 0; j < uncheck.length; j++){
        uncheck[j].checked = false
    }

    // 外面列表点击时，关闭所有小列表所指向的网页
    var htmlHetght = document.getElementsByClassName("right-box2");
    for(var i = 0; i < htmlHetght.length; i++){
        htmlHetght[i].setAttribute("class", "right-box");
    }
    
    var listBox = document.getElementsByClassName("left-checkbox");
    //现需找到大列表的第一个列表
    // 找到关键字，并找到指向元素
    var htmlItem = this.getAttribute("with");
    var change = document.getElementById(htmlItem);
    //选择第一个选项
    var divFather = document.getElementsByClassName(htmlItem)[0];
    divFather.firstElementChild.checked = true;
    // 改类名为我们要的类名
    change.setAttribute("class", "right-box2");
    //关闭起始页
    document.getElementById("welcome").style.display="none";
}

// 点击欢迎页的box时跳转到指向页面
var welcomeBoxs = document.getElementsByClassName("welcome-box");
for(var i in welcomeBoxs){
    welcomeBoxs[i].onclick = boxOpen;
}
function boxOpen(){
    // 得到绑定目标id
    var inputId = this.getAttribute("with");
    // 获取绑定目标
    var inputItem = document.getElementById(inputId);
    // 打开列表
    inputItem.checked = true;
    // 找到关键字，并找到指向元素
    var htmlItem = inputItem.getAttribute("with");
    var change = document.getElementById(htmlItem);
    //选择第一个选项
    var divFather = document.getElementsByClassName(htmlItem)[0];
    divFather.firstElementChild.checked = true;
    // 改类名为我们要的类名
    change.setAttribute("class", "right-box2");
    //关闭起始页
    document.getElementById("welcome").style.display="none";
}

// document.onkeydown = function () {
//     // f12
//     if (window.event && window.event.keyCode == 123) {
//         alert("F12被禁用");
//         event.keyCode = 0;
//         event.returnValue = false;
//     }
//     // ctrl+shift+i
//     if (window.event.ctrlKey && window.event.shiftKey && window.event.keyCode == 73) {
//         alert("ctrl+shift+i被禁用");
//         event.keyCode = 0;
//         event.returnValue = false;
//     }
//     // ctrl+s
//     if (window.event.ctrlKey && window.event.keyCode == 83) {
//         alert("ctrl+s被禁用");
//         event.keyCode = 0;
//         event.returnValue = false;
//     }
// }

// var re =new RegExp();
//     console.log(re);
//     re.toString = function () {
//     alert("请关闭控制台");
//     };