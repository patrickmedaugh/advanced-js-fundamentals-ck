var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var x = 0;
var width = 50;

function Block(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
};

Block.prototype.draw = function() {
  context.fillRect();
};

function gameLoop() {
  if(x < canvas.width - width) {
    context.clearRect(0, 0, canvas.width, canvas.height);
  };
};

gameLoop();

