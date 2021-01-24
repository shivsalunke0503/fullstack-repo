var widthpress=false;
var heightpress=false;
var circlepress=false;
var bgcolorpress=false;
var borderpress=false;
var bgimGEpress=false;
    
function changeWidth(){
    if(widthpress==true){
        document.getElementById("box").style.width="200px";
        widthpress=false;
    }
    else{
        document.getElementById("box").style.width="400px";
        widthpress=true;
    }
}

function changeHeight(){
    if(heightpress==true){
        document.getElementById("box").style.height="200px";
        heightpress=false;
    }
    else{
        document.getElementById("box").style.height="400px";
        heightpress=true;
    }
}
function makeCircle(){
    if(circlepress==true){
        document.getElementById("box").style.borderRadius="";
        document.getElementById("circle").innerText="circle";
        circlepress=false; 
    }
    else{
        document.getElementById("box").style.borderRadius="100%";
        document.getElementById("circle").innerText="square";
        circlepress=true;
    }
}

function changebgColor(){
    if(bgcolorpress==true){
        document.getElementById("box").style.backgroundColor="#000";
        bgcolorpress=false;
    }
    else{
        if(bgimGEpress==false){
        document.getElementById("box").style.backgroundImage="none";
        document.getElementById("box").style.backgroundColor="red";
        bgcolorpress=true;
        }
    }
}

function changeBorder(){
    if(borderpress==true){
        document.getElementById("box").style.border="";
        borderpress=false;
    }else{
        document.getElementById("box").style.border="10px solid #f2f";
        borderpress=true;
    }
}
function changebgi(){
    if (bgimGEpress==true){
        document.getElementById("box").style.backgroundImage="";
        bgimGEpress=false;
    }
    else{
        document.getElementById("box").style.backgroundImage="radial-gradient(#ff0,#fff,#ff9)";
        bgimGEpress=true;
    }
}

function showtext(){
   var input1=document.getElementById("text1").value;
   console.log(""+input1);
document.getElementById("box").innerHTML="<h1 style='color:#fff'>"+input1+"</h1>";
}




