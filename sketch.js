const canvasWidth = 21 * 72 / 2.54
const canvasHeight = 29.7 * 72 / 2.54
const penW = 0.02 * 72 / 2.54
const radius = canvasWidth * 0.4



function draw() {

  createSVG(canvasWidth,canvasHeight)
  strokeWidth(penW)

background('white')
  noFill()

//circle(width/2,height/2, radius)


let phase = 0
let zoff = 0
  translate(width / 2, height / 2);

  for (let b = 0; b < 100; b++){
      beginShape();
  for (let a = 0; a < TWO_PI; a += 0.01) {
    let xoff = map(cos(a), -1, 1, 0, 7);
    let yoff = map(sin(a), -1, 1, 0, 7);
    const r = map(noise(xoff, yoff,zoff), 1, 30, 240, b * 30);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
    }
  zoff += 0.01;



noLoop()
render(['.canvas__wrapper'])
  }
