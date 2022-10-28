var n = 'q';
ddd()
window.addEventListener('resize',ddd);
function relod(){
    setTimeout(function(){
        location.reload(false)
    },400)
}
// abc = parseInt(abc);
// console.log(abc)
// window.addEventListener('resize',)
function ddd(){
    //获取一个只读元素canvas
    // var cvs = document.getElementById('bg');
    var canvasDiv = document.getElementById('canvases');

    switch(n){
        case 'q':
            n = 'w';
            canvasDiv.innerHTML = '<canvas id="bg2"></canvas>';
            cvs = document.getElementById('bg2');
            // document.getElementById('bg').remove(); 
            break;           
        case 'w':
            n = 'q';
            canvasDiv.innerHTML = '<canvas id="bg"></canvas>'
            cvs = document.getElementById('bg')
            // document.getElementById('bg2').remove();
            break;
    }
    // console.log(cvs)

    //获取窗口尺寸
    const width = window.innerWidth,
        height = window.innerHeight;

//设置画布尺寸为窗口大小
cvs.width = width;
cvs.height = height;
//获取2d绘制上下文
const ctx = cvs.getContext('2d');
//列宽
const columnWidth = 20;
//列数
const columnCount = Math.floor(window.innerWidth / columnWidth);
//记录每列写到了第几个文字
//表示每一列下一个文字是该列的第几个文字 
const columnNextIndexes = new Array(columnCount);
columnNextIndexes.fill(height);

//绘画
function draw(){
    // ctx.clearRect(0,0,width,height)

    //每次执行就给上一层增加一层遮罩

    ctx.fillStyle = 'rgba(240,240,240,0.1)';
    ctx.fillRect(0,0,width,height);
    const fz = 15 ;
    ctx.fillStyle = getRandomColor();
    ctx.font = fz+ Math.random()*6 +'px "Arial"';
    // ctx.font = `${fz}px "Arial"`;
    for(var i = 0;i < columnCount;i++){
        const x = i * columnWidth;
        //y = 每个字的大小乘以这一列的下一个文字的数字
        const y = fz * columnNextIndexes[i];
        ctx.fillText(getRandomChar(),x,y);
        //1%的几率回归到0
        if(y>height && Math.random()>0.99){
            columnNextIndexes[i] = 0;
        }
        else{
            columnNextIndexes[i]++;
        }

    }
}

//随机颜色
function getRandomColor(){
    const fontColors = [
        '#33b5e5',
        '#0099cc',
        '#aa66cc',
        '#9933cc',
        '#22ee5e',
        '#669090',
        '#cc0000',
        '#ff44aa',
        '#ff8800',
        '#55dd32',
    ];
    return fontColors[Math.floor(Math.random()* fontColors.length)];
}
//随机文字
function getRandomChar(){
    const str = 'qwertyuiopaxdvgnszfchbkm,;"."‖¿#﹠[]';
    // const str = 'ぎけげかぉおきざすぜせそぞたぬなでつてへほぼゅゆゃんゐウザパラレボ';
    return str[Math.floor(Math.random() * str.length)];
}
draw();
var a = setInterval(draw,40);


}