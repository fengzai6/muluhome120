function myFunction(){
    document.getElementById("ps").innerHTML='通过我观测天象所知，我猜你的内心人格是十分有趣还长得十分眉清目秀又俊俏的，是个百年难遇的优质人格';
    document.getElementById("button1").style.display="none"
}
// alert("最近在学习，更新比较慢，望见谅！")
// 窗口打开执行函数；令位置回归
window.onload=function myAlert(){
    var x = document.getElementById("Alert");
    x.style.transform="translate(0,0)";
}
// 弹窗点击后消失
function closeAlert(){
    var y = document.getElementById("Alert");
    y.style.display="none"
}

freshdate();
setInterval(freshdate,1000);
function freshdate(){
    var newTime = new Date();
    document.getElementById("month").innerText = newTime.getMonth()+1;
    document.getElementById("day").innerHTML = newTime.getDate();
    document.getElementById("h").innerHTML = newTime.getHours();
    document.getElementById("m").innerHTML = ('0'+newTime.getMinutes()).slice(-2);
}

function divCopy() {
        const div = document.getElementById("div2");
        const input = document.createElement("input");
        document.body.appendChild(input);
        input.value = div.innerText;
        input.select();
        
        try {
            if (document.execCommand("copy", false)) {
                handleDomMsg("div 内容复制成功");
            } else {
                handleDomMsg("div 内容复制失败");
            }
        } catch (error) {
            console.log(error, "error")
        } finally {
            input.remove();
        }
        alert("微信已复制！")
    };