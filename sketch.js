const canvasWidth = 210 * 72 / 25.4
const canvasHeight = 297 * 72 / 25.4
const penW = 3 * 72 / 25.4
const radius = canvasWidth * 0.4

createSVG(canvasWidth,canvasHeight)
strokeWidth(penW)

function draw() {
background('white')
  noFill()

//circle(width/2,height/2, radius)


let phase = 0
let zoff = 0

  for (let b = 0; b < 10; b++){
      beginShape();
  for (let a = 0; a < TWO_PI; a += 0.01) {
    let xoff = map(cos(a), -1, 1, -2, 7);
    let yoff = map(sin(a), -1, 1, -2, 7);
    const r = map(noise(xoff, yoff,zoff), 3.8, 8, 135, b * 20);
    let x = width/2 + r * cos(a);
    let y = height/2 + r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
    }
  zoff += 0.01;



noLoop()
render(['.canvas__wrapper'])
  }
