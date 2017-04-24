var launchBtn = document.getElementById('launch');
var ship = document.getElementById('spaceship');


function play() {
  ship.className = "play";
}

function pause() {
  ship.className = "stop";
}


launchBtn.addEventListener('click', launch);
