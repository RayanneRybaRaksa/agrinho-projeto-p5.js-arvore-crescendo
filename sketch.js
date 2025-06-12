function draw() {
  // Céu
  background(135, 206, 235); // Azul claro (RGB)
  textSize(80);
  text("👩‍🌾", 300, 300);

  // Grama
  noStroke();
  fill(34, 139, 34); // Verde (RGB)
  rect(0, height / 2, width, height / 2); // Retângulo da metade inferior
}

let growth = 0; // Crescimento geral (0 a 1)
let growthSpeed = 0.01; // Velocidade de crescimento
let treeY;

function setup() {
  createCanvas(400, 400);
  treeY = height;
}

function draw() {
  background(135, 206, 235); // Céu azul
  textSize(80);
  text("👩‍🌾", 300, 380);
  textSize(30);
  text("vamos cuidar da natureza", 20, 100);

  // Crescimento progressivo (limite de 1)
  if (growth < 1) {
    growth += growthSpeed;
  }

  // Tronco
  drawTrunk(growth);

  // Copas da árvore
  drawCanopy(growth);
}

function drawTrunk(g) {
  fill(139, 69, 19);
  let maxHeight = 140;
  let h = maxHeight * g;
  let currentTop = treeY - h;

  beginShape();
  vertex(180, treeY);
  vertex(180, currentTop);
  bezierVertex(180, currentTop - 20, 220, currentTop - 20, 220, currentTop);
  vertex(220, treeY);
  endShape(CLOSE);
}

function drawCanopy(g) {
  fill(34, 139, 34);

  // Crescimento vertical acompanha o topo do tronco
  let baseY = treeY - 140 * g;

  drawCloud(200, baseY, 100 * g);
  drawCloud(170, baseY - 30 * g, 90 * g);
  drawCloud(230, baseY - 30 * g, 90 * g);
  drawCloud(200, baseY - 60 * g, 80 * g);
}

function drawCloud(x, y, size) {
  ellipse(x, y, size, size);
  ellipse(x - size * 0.4, y + size * 0.2, size * 0.8, size * 0.8);
  ellipse(x + size * 0.4, y + size * 0.2, size * 0.8, size * 0.8);
}
