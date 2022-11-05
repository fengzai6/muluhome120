//跟随鼠标转换角度
function xsMove(p){
    var x = p.pageX;
    var mid = window.innerWidth/2;
    var move = (mid - x)/60 ;
    var xs = document.getElementById('xs1');
    var xsBack = document.getElementById('xs1-back');
    var backQuan = document.querySelector('.quan');
    var backQuan2 = document.querySelector('.quan2');
    var backText = document.getElementById('annivesary');
    var backPlay = document.querySelector('.play');
    // xs.style = `transform: translateX(${move}px);`
    xs.style = `transform: perspective(5000px) rotateY(${move}deg) translateX(${move}px);`
    xsBack.style = `transform: translateX(${move}px);`
    backText.style = `transform: perspective(5000px) rotateY(${move}deg);`
    backQuan.style = `transform: perspective(5000px) rotateY(${move/2}deg);`
    backQuan2.style = `transform: perspective(5000px) rotateY(${move/2}deg);`
    backPlay.style = `transform: perspective(5000px) rotateY(${move*10}deg);`
    
}
document.addEventListener('mousemove',xsMove);

//声音开关的变化
function soundSet(soundB){
    var soundButton = document.getElementById('soundB');
    var soundOn = document.getElementById('soundOn');
    console.log(soundB);
    switch (soundB){
        case 'offon':
            soundButton.className = "null";
            soundOn.innerHTML = `.sound button span {
                background: url(./images/sound-off.svg);
                background-size: 100% 100%;
                animation: sound-off linear 0.12s forwards;
            }`;
            for (var i = 0; i < audioes.length; i++) {
                audioes[i].volume = 0;
            }
            break;
        case 'null':
            soundButton.className = "offon";
            soundOn.innerHTML = ` `;
            soundSitting();
            break;
    }
}
//获取播放按钮和播放样式
var playButton = document.getElementById('playB');
var musicP = document.getElementById('musicpause');
//音乐开关的变化
function musicPlay(playClass){
    console.log(playClass);
    var spanId = "of"+musicNum;
    console.log(spanId);
    switch (playClass){
        case 'start':
            musicP2.innerHTML = `#${spanId}{
                background: url(./images/music-pause2.svg);
                background-size: 100% 100%;
                }`;
            playButton.className = "null";
            musicP.innerHTML = `#playB span{
                background: url(./images/music-pause.svg);
                background-size: 100% 100%;
            }`;
            styles.insertAdjacentHTML('beforeend',`.t1{
                animation-play-state: running;
            }`)
            audioes[musicNum].play();
            break;
        case 'null':
            playButton.className = "start";
            musicP.innerHTML = ` `;
            musicP2.innerHTML = ` `;
            styles.insertAdjacentHTML('beforeend',`.t1{
                animation-play-state: paused;
            }`)
            audioes[musicNum].pause();
            break;
    }

}
//获取样式2
var musicP2 = document.getElementById('musicpause2');
//音乐开关的变化2
function musicPlay2(playId){
    musicNum = playId[2]
    if(!audioes[musicNum].paused){
        playButton.className = "start";
        musicP.innerHTML = ` `;
        musicP2.innerHTML = ` `;
        audioes[musicNum].pause();
    } else{
        musicP2.innerHTML = `#${playId}{
        background: url(./images/music-pause2.svg);
        background-size: 100% 100%;
        }`;
        playButton.className = "null";
        musicP.innerHTML = `#playB span{
                background: url(./images/music-pause.svg);
                background-size: 100% 100%;
            }`;
        audioes[musicNum].play();
    }
}

//当前歌曲序号
var musicNum = 0;
//切换上一首
function musicLast(){
    playButton.className = "null";
    musicP.innerHTML = `#playB span{
                background: url(./images/music-pause.svg);
                background-size: 100% 100%;
            }`;
    switch (musicNum){
        case 0:
            audioes[musicNum].pause();
            musicNum = 2;
            audioes[musicNum].currentTime = 0;
            audioes[musicNum].play();
            break;
        case 1:
            musicNum = 0;
            audioes[musicNum].currentTime = 0;
            audioes[1].pause();
            audioes[musicNum].play();
            break;
        case 2:
            musicNum = 1;
            audioes[2].pause();
            audioes[musicNum].currentTime = 0;
            audioes[musicNum].play();
            break;
    }
    //气泡的开关打开
    var spanId = "of"+musicNum;
    musicP2.innerHTML = `#${spanId}{
        background: url(./images/music-pause2.svg);
        background-size: 100% 100%;
        }`;
}
//切换下一首
function musicNext(){
    console.log(musicNum);
    playButton.className = "null";
    musicP.innerHTML = `#playB span{
                background: url(./images/music-pause.svg);
                background-size: 100% 100%;
            }`;
    switch (musicNum){
        case 0:
            audioes[musicNum].pause();
            musicNum = 1;
            audioes[musicNum].currentTime = 0;
            audioes[musicNum].play();
            break;
        case 1:
            musicNum = 2;
            audioes[musicNum].currentTime = 0;
            audioes[1].pause();
            audioes[musicNum].play();
            break;
        case 2:
            musicNum = 0;
            audioes[2].pause();
            audioes[musicNum].currentTime = 0;
            audioes[musicNum].play();
            break;
    }
    //气泡的开关打开
    var spanId = "of"+musicNum;
    musicP2.innerHTML = `#${spanId}{
        background: url(./images/music-pause2.svg);
        background-size: 100% 100%;
        }`;
}

//当达到可视区域时显示动画
function showDiv() {
    var scroolTop= document.documentElement.scrollTop; 
    //获取滚动条距离页面顶部的距离，如果滚动条距离页面距离大于目标元素距离页面顶部的距离，则目标元素已经往上滚动，且超出了当前可视区域，则给该元素添加fixed属性
    var xs2 = document.getElementById('xs3');
    if(scroolTop>=xs2.offsetTop){
    xs2.classList.add('animationPlay');
    // audioes[0].play();
    }else{
    xs2.classList.remove('animationPlay');
    // audioes[0].pause();
    };
}
window.onscroll = showDiv;
//粉色播放时显示许嵩2
function showXs(){
    var xs2 = document.getElementById('xs2');
    if(musicNum == 0){
        xs2.classList.add('animationPlay');
        styles.insertAdjacentHTML('beforeend',`.t1{
            animation: sliding 309s forwards linear;
        }`)
    }
    document.removeEventListener('click',showXs)
}
document.addEventListener('click',showXs);
//当划到第二个页面底部时，固定播放控制
var styles = document.getElementById('style-tag');
function setPlayStyle() {
    var contentHeight =  document.getElementById('con1').offsetHeight;
    var scroolTop= Math.round(document.documentElement.scrollTop); 
    // console.log(contentHeight+","+scroolTop)
    if(scroolTop>=contentHeight){
        styles.innerHTML = `.play{
            position: fixed;
            top: 10px;
            box-shadow:inset 0 0 10px 5px #2c3e50c2;
        }.sound{
            position: fixed;
            top: 37px;
        }`;
        document.removeEventListener('scroll',setPlayStyle);
    }
}
document.addEventListener('scroll',setPlayStyle)

var audioes = document.getElementsByTagName('audio');
function soundSitting(){
    for(var i=0; i<audioes.length;i++){
        audioes[i].volume = 0.5;
    }
}
soundSitting();