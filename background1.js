var css=document.querySelector("h2");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var file=document.querySelector(".myfile");
var body=document.getElementById("booo");
function setGradient() {
	document.body.style.background="linear-gradient(to right, "
	+color1.value
	+","
	+color2.value
	+")";

	css.textContent=body.style.background+";";
}
function setBackground() {
	document.body.style.background = "#f3f3f3 url('macos_mojave_night-wallpaper-1366x768.jpg') no-repeat right top";
}
function toggle_visibility(id0,id1) {
       var e = document.getElementById(id0);
       var f = document.getElementById(id1);
       if(e.style.display == 'block'&& f.style.display == 'none')
          { 
          	e.style.display = 'none';
          	f.style.display = 'block';
        	setGradient();
          }
       else{
          e.style.display = 'block';
          f.style.display = 'none';
          setBackground();
       }
   }

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
window.onload =toggle_visibility('container0','container01');
window.onload=setGradient();
