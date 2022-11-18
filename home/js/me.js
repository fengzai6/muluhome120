//---------------------------------
// 找到那些列表开关，设置点击事件
var htmlList = document.getElementsByClassName("csslist")
for (var i in htmlList) {
    htmlList[i].onclick = openBox;
}
// 点击事件
function openBox() {

    // 列表点击时，关闭所有列表包括自己所指向的网页
    var htmlHetght = document.getElementsByClassName("right-box2");
    for (var i = 0; i < htmlHetght.length; i++) {
        //添加一个循环找check-box2，遇见则改为box
        htmlHetght[i].setAttribute("class", "right-box");
    }

    // 找到里面的列表开关，变为全关
    var uncheck = document.getElementsByClassName("csslist");
    for (var j = 0; j < uncheck.length; j++) {
        uncheck[j].checked = false
    }
    //让自己被勾选
    this.checked = true;
    // 找到关键字，并找到指向元素
    var htmlItem = this.getAttribute("with");
    var change = document.getElementById(htmlItem);
    // 改类名为我们要的类名
    change.setAttribute("class", "right-box2");
    //刷新框架
    change.childNodes[1].contentWindow.location.reload(true);
}

//外面点击，里面的选择全关
var labelList = document.getElementsByClassName("left-checkbox");
for (var i in labelList) {
    labelList[i].onclick = checkd;
}
function checkd() {
    // 找到里面的列表开关，变为全关
    var uncheck = document.getElementsByClassName("csslist");
    for (var j = 0; j < uncheck.length; j++) {
        uncheck[j].checked = false
    }

    // 外面列表点击时，关闭所有小列表所指向的网页
    var htmlHetght = document.getElementsByClassName("right-box2");
    for (var i = 0; i < htmlHetght.length; i++) {
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
    //刷新框架
    change.childNodes[1].contentWindow.location.reload(true);
    //显示切换按键
    var topSwitch = document.getElementById('switch');
    topSwitch.style = 'opacity: 1;'
    //关闭起始页
    document.getElementById("welcome").style.display = "none";
}

// 点击欢迎页的box时跳转到指向页面
var welcomeBoxs = document.getElementsByClassName("bubble");
for (var i in welcomeBoxs) {
    welcomeBoxs[i].onclick = boxOpen;
}
function boxOpen() {
    // 得到绑定目标id
    var getWith =this.getAttribute("with");
    if(getWith[4] == "a"){
        inputId = "left-box1";
    }else{
        inputId = "left-box2";
    }
    // 获取绑定目标
    var inputItem = document.getElementById(inputId);
    // 打开列表
    inputItem.checked = true;
    // 找到关键字，并找到指向元素
    var htmlItem = this.getAttribute("with");
    var change = document.getElementById(htmlItem);
    // 列表点击时，关闭所有列表包括自己所指向的网页
    var htmlHetght = document.getElementsByClassName("right-box2");
    for (var i = 0; i < htmlHetght.length; i++) {
        //添加一个循环找check-box2，遇见则改为box
        htmlHetght[i].setAttribute("class", "right-box");
    }
    // 找到里面的列表开关，变为全关
    var uncheck = document.getElementsByClassName("csslist");
    for (var j = 0; j < uncheck.length; j++) {
        uncheck[j].checked = false;
    }
    switch (getWith.slice(4)){
        case 'a1':
            uncheck[0].checked = true;
            break;
        case 'a2':
            uncheck[1].checked = true;
            break;
        case 'b1':
            uncheck[2].checked = true;
            break;
        case 'b2':
            uncheck[3].checked = true;
            break;
    }
    // 改类名为我们要的类名
    change.setAttribute("class", "right-box2");
    //刷新框架
    change.childNodes[1].contentWindow.location.reload(true);
    //显示切换按键
    var topSwitch = document.getElementById('switch');
    topSwitch.style = 'opacity: 1;'
    //关闭起始页
    document.getElementById("welcome").style.display = "none";
}

//点击欢迎页时显示欢迎页，关闭所选按钮
function displayWelcome(){
    document.getElementById("welcome").style.display = "flex";
    var unchecks = document.getElementsByClassName("left-checkbox");
    for (var j = 0; j < unchecks.length; j++) {
        unchecks[j].checked = false
    }
    var htmlHetght = document.getElementsByClassName("right-box2");
    for (var i = 0; i < htmlHetght.length; i++) {
        htmlHetght[i].setAttribute("class", "right-box");
    }
    //关闭切换按键
    var topSwitch = document.getElementById('switch');
    topSwitch.style = 'opacity: 0;'
}


//打开菜单，关闭菜单
var leftBar = document.querySelector(".left");
function openMenu(){
    leftBar.style = "top: 3.6rem; left: 0px;"
}
function closeMenu(){
    leftBar.style = "top: 1.6rem; left: -300px;"
}
document.querySelector('.right').addEventListener('mouseover',closeMenu);
document.querySelector('.empty3').addEventListener('mouseover',openMenu);

// 切换切换
function doThis(htmlId,num,num2){
    var uncheck = document.getElementsByClassName("csslist");
    for (var j = 0; j < uncheck.length; j++) {
        uncheck[j].checked = false
    }
    uncheck[num2].checked = true;
    var uncheckLeft = document.getElementsByName('left')[num];
    uncheckLeft.checked = true;
    var change = document.getElementById(htmlId);
    change.setAttribute("class", "right-box2");
    change.childNodes[1].contentWindow.location.reload(true);
}
//提示到头或者到尾
function showAlert(text){
    let alertObj = document.getElementById('topAlert');
    let alertObj2 = document.querySelector('.switchAlert');
    alertObj2.innerText = text;
    alertObj.className = 'showAl';
    setTimeout(function(){
        alertObj.className = 'null';
    },2000)
}
function lastHtml(){
    var thisHtml = document.getElementsByClassName('right-box2')[0];
    let htmlId = thisHtml.id;
    switch(htmlId){
        case 'htmla1':
            return showAlert('也许回到夏至了');
        case 'htmla2':
            thisHtml.className = 'right-box';
            return doThis('htmla1',0,0);
        case 'htmlb1':
            thisHtml.className = 'right-box';
            return doThis('htmla2',0,1);
        case 'htmlb2':
            thisHtml.className = 'right-box';
            return doThis('htmlb1',1,2);
    }
    
}
function nextHtml(){
    var thisHtml = document.getElementsByClassName('right-box2')[0];
    let htmlId = thisHtml.id;
    switch (htmlId) {
        case 'htmla1':
            thisHtml.className = 'right-box';
            return doThis('htmla2', 0, 1);
        case 'htmla2':
            thisHtml.className = 'right-box';
            return doThis('htmlb1', 1, 2);
        case 'htmlb1':
            thisHtml.className = 'right-box';
            return doThis('htmlb2', 1, 3);
        case 'htmlb2':
            return showAlert('还会迎来冬至吗');
    }
}