//document object model
function darkmode(){
    document.body.style.backgroundColor ="blue"
    document.body.style.color = "black";
    let button = document.getElementById("button").innerText ="Lightmode"
    button.innerText ="Lightmode";
}

function lightmode(){
    document.body.style.backgroundColor ="black"
    document.body.style.color = "blue";
    let button = document.getElementById("button").innerText ="darkmode"
    button.innerText ="darkmode";
}

function modechange(){
    let btext= document.getElementById("button").innerText 
    if(btext=="darkmode"){
        darkmode();
    }else if (btext =="Lightmode"){
        lightmode();
    }
 }



