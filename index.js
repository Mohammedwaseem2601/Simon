var colorArray = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;


function checkUserPattern(currIdx){

  if(gamePattern[currIdx] === userClickedPattern[currIdx])
  {
    if(gamePattern.length === userClickedPattern.length)
    {
      console.log(userClickedPattern);
      console.log("next level");
      setTimeout(nextsequence, 1000);
    }
  }

  else{
    makeSound("wrong");
    document.querySelector("#level-title").innerHTML = "GAME OVER!....., PRESS ANY KEY TO RESTART"
    gamePattern =[];
    userClickedPattern = [];
    startover();
  }
}


function nextsequence(){
  document.querySelector("#level-title").innerHTML = "Level: " + level;
  userClickedPattern = [];
  var newColorIdx = Math.random();
  newColorIdx = Math.floor(newColorIdx * 4);

  console.log("new idx is :"+newColorIdx);
  level += 1;

  document.querySelector("."+colorArray[newColorIdx]).classList.add("newGeneratedBox");

  gamePattern.push(colorArray[newColorIdx]);
  setTimeout(function ()
  {
    document.querySelector("."+colorArray[newColorIdx]).classList.remove("newGeneratedBox");
  },200);

  console.log(gamePattern);
}

function makeSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startover()
{
  level = 0;
  gamePattern = [];
  started = false;
}



document.addEventListener("keypress",function(){
  if(!started){
    console.log("key pressed");
    started = true
    level = 0;
    document.querySelector("#level-title").innerHTML = "Level: " + level;
    nextsequence();
  }
});

for(var i = 0; i<4; i++)
{
  document.querySelectorAll(".btn")[i].addEventListener("click", function() {
    userClickedPattern.push(this.id);
    makeSound(this.id);
    checkUserPattern(userClickedPattern.length - 1);
});
}
