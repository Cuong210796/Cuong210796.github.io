gameLoop.init();
let ctx = gameEngine.context;
let canvasWidth = ctx.canvas.width;
let canvasHeight = ctx.canvas.height;
var piano = new Piano(canvasWidth * 0.25, canvasHeight * 0.3, canvasWidth * 0.5, canvasWidth * 0.2, 20);
gameLoop.main();