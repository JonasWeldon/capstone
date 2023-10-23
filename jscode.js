function changeBackground() {
    var text= document.getElementById("AboutJonasTitle").style.backgroundColor = "black"
}

function backToNormal() {
    var text = document.getElementById("AboutJonasTitle").style.backgroundColor = ""
}

setTimeout(Suprise, 5000);

function Suprise(){
    document.getElementById("KeyDetails").style.backgroundColor = "blue"
    document.getElementById("FunFacts").style.backgroundColor = "red"
}
function change(){
    document.getElementById("AboutJonasTitle").innerHTML = "About Me";
}