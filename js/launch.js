launch.addEventListener("click", function(){
  var audio = document.getElementById("blastoff");
  audio.play();
	spaceship.style.animation = "ship 18s";

  var vid = document.getElementById("inshuttle");
  vid.play();

});
