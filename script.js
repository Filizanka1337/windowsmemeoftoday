function chooseMeme() {
    return "memes/meme" + Math.floor(Math.random() * 15) + ".png";
}

document.getElementById("img").src = chooseMeme();

document.getElementById("btn").onclick = function() {
    document.getElementById("img").src = chooseMeme();
}