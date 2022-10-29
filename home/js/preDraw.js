//反斜杠取消了回车
let styles = `\
pre{
    opacity: 1;
}
/*
* 啥玩意？半成品？
* 这页面怎么啥都没呀，也没样式呢？
* 别急，我现在写一下吧~
*/

/* 上面这个容器设置一下先 */
.welcome-head{
    text-align: center;
    background-color: var(--front-color);
    height:4rem;
}

/* 为了更好的看到效果，把pre缩小些 */
pre {
    width: 35%;
}

/* 先搞出4个气泡先 */
.bubble{
    position: absolute;
    top: 150px;
    width: 150px;
    height: 150px;
    background: linear-gradient(90deg,#6ab5b3,#3e75c1);
    border-radius: 50%;
    opacity: 0.8;
}

/* 给字搞一下！放进气泡里 */
.bubble{
    line-height: 150px;
    text-align: center;
    font-size: 20px;
    color: #0f1922;
    font-family: 'SThupo';
}

/* 给气泡来点影子吧 */
.bubble{
    box-shadow: inset -4px -5px 10px 8px rgba(57, 141, 157,0.9);
    filter: drop-shadow(0px 5px 3px rgba(48, 83, 104,0.7));
}

/* 现在加上动画效果让气泡生动起来！ */
#welcome-box1{
    animation: flying 2s infinite alternate ease-out,
    big 2s infinite alternate linear;
}
#welcome-box2{
    animation: flying 3s infinite alternate ease-out,
    big2 3s infinite alternate linear;
}
#welcome-box3{
    animation-duration: 2.5s;
    animation: flying 2s infinite alternate ease-out,
    big 2s infinite alternate linear;
}
#welcome-box4{
    animation: flying 2.8s infinite alternate ease-out,
    big2 2.8s infinite alternate linear;
}

/* 好，就是这样，写好啦！
* 感觉一般般，其实还是我太菜了！*/

/* 好了，现在我要关掉这个界面啦
* 等等，气泡还有变化哦
* 愿你每天快乐！！ */

pre{
    opacity: 0;
    display:none;
}
#welcome-box1{
    left: 15%;
    top: 160px;
}
#welcome-box2{
    left: 35%;
    top: 155px;
}
#welcome-box3{
    right: 35%;
    top: 160px;
}
#welcome-box4{
    right: 15%;
    top: 155px;
}

`;

var speed = 40;
// var delayTime = speed * (styles.length + 200);

// 返回输入了的html
const getStyleHtml = function () {
  return document.getElementById('style-text').innerHTML;
};
// 判断是否在注释里
let openComment = false;
// 写字
const writeStyleChar = function (which) {
  if (which === '/' && !openComment) {
    openComment = true;
    styles = getStyleHtml() + which;
  } else if (which === '/' && openComment) {
    openComment = false;
    // 找到所有html，替换进em元素中的$1，由于找到的/没了，加上
    styles = getStyleHtml().replace(
      /(\/[^\/]*\*)$/,
      '<em class="comment">$1/</em>',
    );
  } else if (which === ':') {
    //查找所有字母 - 连接符 除了换行符的
    styles = getStyleHtml().replace(
      /([a-zA-Z- ^\n]*)$/,
      '<em class="key">$1</em>:',
    );
  } else if (which === ';') {
    //查找除了：之外的html
    styles = getStyleHtml().replace(
      /([^:]*)$/,
      '<em class="value">$1</em>;',
    );
  } else if (which === '{') {
    //查找全部
    styles = getStyleHtml().replace(
      /(.*)$/,
      '<em class="selector">$1</em>{',
    );
  } else {
    styles = getStyleHtml() + which;
  }

  document.getElementById('style-text').innerHTML = styles;
  
  //写样式
  return document
    .getElementById('style-tag')
    .insertAdjacentHTML('beforeend', which);
};
//输入的字 初始量0  写字速度
const writeStyles = function (message, index, interval) {
  if (index < message.length) {
    const pre = document.getElementById('style-text');
    pre.scrollTop = pre.scrollHeight;
    // console.log(index)=0
    writeStyleChar(message[index++]);
    // console.log(index)=1
    //递归写字
    // return setTimeout(
    //   () => writeStyles(message, index, interval),
    //   interval,
    // );  
    //以上代码等于下方代码
    return setTimeout(function(){
        return writeStyles(message,index,interval)
    },interval)
  }
};

//输入的字 初始量0  写字速度
writeStyles(styles, 0, speed);
//增加页面元素
// setTimeout(function(){
//     document.getElementById('style-tag').insertAdjacentHTML(
//       'beforeend',
//       `\#welcome-box1{
//         left: 15%;
//         top: 160px;
//     }
//     #welcome-box2{
//         left: 35%;
//         top: 155px;
//     }
//     #welcome-box3{
//         right: 35%;
//         top: 160px;
//     }
//     #welcome-box4{
//         right: 15%;
//         top: 155px;
//     }\
//     `,
//     );
// },delayTime);
