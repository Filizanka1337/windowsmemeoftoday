function chooseMeme() {
    return Math.floor(Math.random() * 16) + ".png";
}

document.getElementById("img").src = chooseMeme();

document.getElementById("btn").onclick = function() {
    document.getElementById("img").src = chooseMeme();
}