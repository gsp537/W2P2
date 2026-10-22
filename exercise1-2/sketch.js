function setup () {
createCanvas(400, 400);
    
}

function draw() {
    background (255);
let x = 10;
while (x <  400) {
    circle (x, 200, 25);
    x = x + 20;
    fill(255)
  
}

x = 10;
while (0 < mouseX) {
    circle (x, 200, 25);
    x = x + 20;
    fill (0, 0, 255)
}
}