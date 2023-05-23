document.getElementById("image").src="tv.webp"
document.getElementById("text").innerHTML="off"
document.getElementById("Of").style.backgroundColor="rgb(245,188,0)"
 document.getElementById("Of").style.color="white"





function btnOn() {
    document.getElementById("image").src="tvon.webp"
    document.getElementById("text").innerHTML="on"
    document.getElementById("On").style.backgroundColor="rgb(245,188,0)"
    document.getElementById("On").style.color="white"
    document.getElementById("Of").style.backgroundColor="white"
    document.getElementById("Of").style.color="black"
}

function btnOf() {
    document.getElementById("image").src="tv.webp"
    document.getElementById("text").innerHTML="off"
    document.getElementById("Of").style.backgroundColor="rgb(245,188,0)"
    document.getElementById("Of").style.color="white"
    document.getElementById("On").style.backgroundColor="white"
    document.getElementById("On").style.color="black"
}