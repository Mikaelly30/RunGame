var bancoDeDados;
var estadoJogo;
var contagemJogares;
var jogo;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  bancoDeDados = firebase.database();

  jogo = new Jogo();
  jogo.obterEstado();
}

function draw() {
  background(255,255,255);  
  console.log(estadoJogo);
  drawSprites();
}