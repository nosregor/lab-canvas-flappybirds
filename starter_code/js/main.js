// Global variables

// Canvas config
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const speed = 2;
let pipes = [];
let interval;
let frames = 0;
const images = {
  bg: './images/bg.png',
  flappy: './images/flappy.png',
  pipe1: './images/obstacle_bottom.png',
  pipe2: './images/obstacle_top.png',

};

// Instance variables
const bg = new Background(ctx, images.bg, speed);
const flappy = new Flappy(ctx, images.flappy);

// Main functions
function update() {
  frames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bg.draw();
  flappy.draw();
  generatePipes();
  drawPipes();
  checkCollitions();
}

function start() {
  if (interval) return;
  pipes = [];
  frames = 0;
  interval = setInterval(update, 1000 / 60);
}

function gameOver() {
  clearInterval(interval);
  ctx.font = '80px Avenir';
  ctx.fillText('Game Over', 50, 250);
  ctx.font = '50px Avenir';
  ctx.fillStyle = 'yellow';
  ctx.fillText("Press 'esc' to restart", 50, 300);
  interval = null;
  bg.music.pause();
}

// side functions
function generatePipes() {
  if (frames % 180 === 0) {
    // 1.- Generate top pipe
    const y = 0;
    const pipeHeight = Math.floor(Math.random() * 200) + 20;
    const topPipe = new Pipe(ctx, images.pipe2, y, pipeHeight);
    pipes.push(topPipe);

    // 2.- space between pipes
    const window = 180;
    const pipeHeight2 = canvas.height - (window + pipeHeight);

    // 3.- Generate bottom pipe
    const bottomPipe = new Pipe(ctx, images.pipe1, canvas.height - pipeHeight2, pipeHeight2);
    pipes.push(bottomPipe);
  }
}

function drawPipes() {
  pipes.forEach((pipe) => {
    pipe.draw();
  });
}

function checkCollitions() {
  pipes.forEach((pipe) => {
    if (flappy.crashWith(pipe)) {
      gameOver();
    }
  });
}

addEventListener('keydown', (e) => {
  if (e.keyCode === 32 && flappy.y > 50) {
    flappy.y -= 60;
    flappy.gravity = 3;
  }

  if (e.keyCode === 27) {
    start();
  }

  if (e.key = 'Enter') {
    start();
    bg.music.play();
  }
});


// start();

// window.onload = function() {
//   document.getElementById("start-button").onclick = function() {
//     startGame();
//   };

//   function startGame() {

//   }

// };
