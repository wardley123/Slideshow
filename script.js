let imageList = [];
let current = 0;

function preload() {
  imageList[0] = loadImage("wardley.jpg");
  imageList[1] = loadImage("");
  imageList[2] = loadImage("img3.jpg");
}

function setup() {
  createCanvas(600, 400);
  next = createButton("Next");
  next.position(100, 20)
  next.mousePressed(nextImage);
  previous = createButton("Previous");
  previous.position(20, 20)
  previous.mousePressed(previousImage);
 

  }

  //add your code for function previousImage here
  function draw() {}

  function nextImage() {
    background(220);
    if (current < imageList.length - 1) {
      current += 1;
    }
    imageList[current].resize(600, 400);
    image(imageList[current], 0, 0);
  }

  //add your code for function previousImage here
  function previousImage() {
    background(220);
    if (current > 0) {
      current -= 1
    }
    imageList[current].resize(600, 400);
    image(imageList[current], 0, 0)
  }


