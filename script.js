let angkaRandom;
let acak;
let x;

function myFunction() {
    randomLoad();
    x = document.getElementById("pria").value;
    y = document.getElementById("wanita").value;
    document.getElementById("cowo").innerHTML = x;
    document.getElementById("cewe").innerHTML = y;
}

function random(){
    angkaRandom = Math.floor(Math.random()*100)+1;
    document.getElementById("persentase").innerHTML = `${angkaRandom} %`;
}

function randomLoad(){
    acak = setInterval(function(){
        random();
    }, 100);

    setTimeout(function(){
        // buatAnimasi();
        clearInterval(acak);
    }, 4000);

    setTimeout(function(){
        buatAnimasi();
    }, 4000)
}

function buatAnimasi(){
    img = document.getElementsByClassName("bimlek");
    img.style.animation = "melayang .3s ease-in-out alternate infinite;";
}
