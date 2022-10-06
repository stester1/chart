function start(){
document.getElementById("START").disabled=true;
document.getElementById("STOP").disabled=false;
alert("start disabled press stop");
}
function stop(){
document.getElementById("START").disabled=false;
document.getElementById("STOP").disabled=true;
alert("stop disabled press start");
}
