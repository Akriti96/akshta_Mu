var canvas;
var backgroundImage;
var bgImg;
var database;
// objects
var myform, myplayer, mygame

var MyplayerCount, MygameState
var car1, car2, car1Img, car2Img, trackImg
var cars=[]
var fuelImage,coinsImage

var allPlayerInfo
var fules
var coins



function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1Img = loadImage("./assets/car1.png")
  car2Img = loadImage("./assets/car2.png")
  trackImg = loadImage("./assets/track.jpg")
  fuelImage=loadImage("./assets/fuel.png")
  coinsImage=loadImage("./assets/goldCoin.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight)

  // initalise the firebase
  database = firebase.database()

  mygame = new Game()
  mygame.start()
  mygame.getState()
}

function draw() {
  background(backgroundImage)

  // when the 2 players enter the game update gameState to 1
  if (MyplayerCount === 2) {
    mygame.updateState(1)
  }

  if (MygameState === 1) {
    mygame.play()

  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

