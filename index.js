var hole =document.getElementById("hole");
var game =document.getElementById("game");
var result = document.getElementById("result");
var text = document.getElementById("text");
var score = 0;
var jumping = 0;



hole.addEventListener("animationiteration", Ranhole);

function Ranhole(){
    var random = -((Math.random()*350)+150);
    hole.style.top = random +"px";
}

var fall = setInterval(function(){
    var birdtop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(jumping==0)
    {
        bird.style.top = (birdtop+2)+"px";
    }
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var hTop =(500+holeTop);
    if((birdtop >450) || ((blockleft<50)&&(blockleft -50)&&(birdtop<hTop)|| (birdtop >hTop +100)))
    {
        result.style.display = "block";
        text.innerText = `your final score is : ${socre}`;
        game.style.display = "none"
        score = 0;
    }

},10)

window.addEventListener("keydown", hop)

function hop()
{
    jumping =1;
    var birdtop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(birdtop > 6)
    {
        bird.style.top = (birdtop - 60) + "px";
    }
    setTimeout(function(){
        jumping = 0
    },100)
}