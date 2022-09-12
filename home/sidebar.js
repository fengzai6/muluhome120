var day = document.getElementById("day");
var dayNight = document.getElementById("dayNight");
day.onclick = function(){
    if(this.innerHTML.match("白天")){
        this.innerHTML = "🌙黑夜";
        dayNight.setAttribute("href","meDark.css")
    }
    else{
        this.innerHTML = "🌈白天";
        dayNight.setAttribute("href","")
    }
}
