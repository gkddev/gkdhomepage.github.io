function startTime() {
    var greeting;
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
     s = checkTime(s);
    document.getElementById('hour').innerHTML =h;
    document.getElementById('minute').innerHTML =m ;
    if(h>18)
{
    greeting='Good Evening!';
}else if(h>12){
    greeting='Good afternoon!';
}else if (h>0) {
    greeting='Good morning!';
}else{
    greeting='Welcome!';
}
var g=document.getElementById("greetings");
g.innerHTML=greeting;
    var t = setInterval(startTime,1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function greet()
{
if(h>18)
{
    greeting='Good Evening!';
}else if(h>12){
    greeting='Good afternoon!';
}else if (h>0) {
    greeting='Good morning!';
}else{
    greeting='Welcome!';
}
var g=document.getElementById("greetings");
g.innerHTML=greeting;
}
window.onload=startTime();