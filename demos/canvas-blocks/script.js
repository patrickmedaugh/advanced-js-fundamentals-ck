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
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Block.prototype.move = function() {
  if(this.y + this.height < canvas.height) { this.y++ };
  return this;
};


canvas.addEventListener("click", function() {

});

var blocks = [];
blocks.push(new Block(25, 25, 25, 25));
blocks.push(new Block(100, 25, 25, 25));
blocks.push(new Block(175, 25, 25, 25));

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  blocks.forEach(function(block) {
    block.draw().move();
  });
  requestAnimationFrame(gameLoop);
});

gameLoop();

