var css=document.querySelector("h2");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var myfile1=document.querySelector(".myfile");
var body=document.getElementById("booo");
var checking=document.getElementById("checking");
myfiledestination="macos_mojave_night-wallpaper-1366x768.jpg";
function setGradient() {
	body.style.background="linear-gradient(to right, "
	+color1.value
	+","
	+color2.value
	+")";

	css.textContent=body.style.background+";";
}

function toggle_visibility(id0,id1) {
       var e = document.getElementById(id0);
       var f = document.getElementById(id1)
       if (e.style.display=='block'&& f.style.display=='block') {
       	e.style.display='block';
       	f.style.display='none';
       }else{
       if(e.style.display == 'block'&& f.style.display == 'none')
          { 
          	e.style.display = 'none';
          	f.style.display = 'block';
          	// document.body.style.backgroundImage = "url('macos_mojave_night-wallpaper-1366x768.jpg')";
          	setFile();
        	// setBackground();
        	
          }
       else{
          e.style.display = 'block';
          f.style.display = 'none';
          // alert("GRADIENT");
          setGradient();
       }
   	}
   }
function setFile()
{
   	document.body.style.backgroundImage = "url("+myfiledestination+")";
   	

}
document.getElementById('myfile').addEventListener('change', readURL, true);
function readURL(){
   var file = document.getElementById("myfile").files[0];
   var reader = new FileReader();
   reader.onloadend = function(){
      document.getElementById('booo').style.backgroundImage = "url(" + reader.result + ")";        
      myfiledestination=reader.result
   }
   if(file){
      reader.readAsDataURL(file);
    }else{
    }
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
// window.onload=setGradient();
window.onload =toggle_visibility('container0','container01');

