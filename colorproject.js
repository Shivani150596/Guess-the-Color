alert("connected");
var numSquare=6;
var color=generateRandomColor(numSquare);

var square=document.querySelectorAll(".square ");
var pickedColor=pickColor();
console.log(pickedColor);
var colorDisplay=document.getElementById("colorDisplay");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click",function(){
hardbtn.classList.remove("selected");
easybtn.classList.add("selected");
var numSquare=3;
color=generateRandomColor(numSquare);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
for(var i=0;i<square.length;i++){
    if(color[i]){
        square[i].style.background=color[i];
    }else{
        square[i].style.display="none";
    }
}
});

hardbtn.addEventListener("click",function(){
easybtn.classList.remove("selected");
hardbtn.classList.add("selected");
var numSquare=6;
color=generateRandomColor(numSquare);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
for(var i=0;i<square.length;i++){
    if(color[i]){
        square[i].style.background=color[i];
        square[i].style.display="block";
    }
}
});


resetButton.addEventListener("click",function(){
   color=generateRandomColor(numSquare);//to generate all new colors
   pickedColor=pickColor();//to pick new random color
   colorDisplay.textContent=pickedColor;//to change the colordisplay to new picked one
   this.textContent="new game";
   //change colors of square
   for(var i=0;i<square.length;i++){
    square[i].style.background=color[i];
   }
   h1.style.background="steelblue ";
  message.textContent="";
});

colorDisplay.textContent=pickedColor;

for(var i=0;i<square.length;i++){
	square[i].style.background=color[i];
    square[i].addEventListener("click", function(){
    	var clickColor = this.style.background;
        console.log(clickColor,pickedColor);
    	if(clickColor==pickedColor){
           alert("correct");
           message.textContent="correct";
           resetButton.textContent="Play Again?";
           changeColor(clickColor);
           h1.style.background=clickColor;
        } else{
            this.style.background="#232323";
            message.textContent="Try again";
        }
    });

}
function changeColor(colors){
    for (var i = 0; i < square.length; i++) {
        square[i].style.background=colors;
    }
}

function pickColor(){
    var raandom = Math.floor(Math.random() * color.length);
    return color[raandom];
}

function generateRandomColor(num){
    var arr=[]
    for(var i=0;i<num;i++){
     arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}