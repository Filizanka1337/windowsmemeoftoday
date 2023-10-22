function chooseMeme()
{
    return "images/meme" + Math.floor(Math.random * 14) + ".png";
}

document.getElementById("img").src = chooseMeme();