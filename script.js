const poiRunner = document.querySelector(".runner-poi");
const congratsDiv = document.querySelector(".congrats")
const congratsMessage = document.querySelector("#congrats-message")
const restartBtn = document.querySelector("#restart-btn")
let counter = 0;

poiRunner.onmouseover=function(){
   counter++;
   const xpos = parseInt(Math.random()*1000);
   // const ypos = parseInt(Math.random()*5000);
   poiRunner.style.left= xpos+"px"
   // poiRunner.style.top= ypos+"px"
}
poiRunner.onclick=function(){
   congratsDiv.style.display="block"
   congratsMessage.innerHTML="You catched Poi in your "+counter+". times"
   poiRunner.style.display="none"
   poiRunner.style.left="50%";
   counter=0
}
function restartGame(){
   location.reload()
}
// restartBtn.onclick=location.reload()