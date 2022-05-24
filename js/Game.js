class Game {
  constructor() {
    this.playerMoving = false
  }


  getState() {
    var stateRoot = database.ref("gameState")
    stateRoot.on("value", (data) => {
      MygameState = data.val()
    })
  }

  updateState(state) {
    database.ref("/").update({
      gameState: state
    })
  }

  //gamestate=0
  start() {
    myform = new Form()
    myform.display()


    myplayer = new Player()
    myplayer.getplayercount()

    car1 = createSprite(width / 2 + 100, height-100)
    car1.addImage("car1", car1Img)
    car1.scale = 0.07

    car2 = createSprite(width / 2 - 100, height-100)
    car2.addImage("car2", car2Img)
    car2.scale = 0.07

    cars = [car1, car2]

    fules= new Group()
    coins= new Group()

    //calling fules
    this.addSprites(fules,20,fuelImage,0.1)

    // calling coins
    this.addSprites(coins,30,coinsImage,0.1)

  }

  addSprites(spriteGroup,numberSprites,spriteImage,scale){
    for(var i=0; i<numberSprites.length;i++){
      var x,y
      x= random(width/2+150, width/2-150)
      y=random(-height*5,height-400)

      var sprite= createSprite(x,y)
      sprite.addImage("sprite",spriteImage)
      sprite.scale=scale
      spriteGroup.add(sprite)
    }
  }

  // gamestate=1
  play() {
    myform.hide()
    myform.titleImg.position(40, 50);
    myform.titleImg.class("gameTitleEffect")
    Player.getPlayerInfo()
    // console.log(allPlayerInfo)

    // !== undefined means 2 cars entered === undefined means not entered
    if (allPlayerInfo !== undefined) {
      // image(loadImageName,x,y,w,h)
      image(trackImg, 0, -height * 5, width, height * 6)

      //index of the array
      var index = 0;
      for (var i in allPlayerInfo) {
        // console.log(i)
        //getting x and y position of i th player from firebase
        // add 1 to the index for very loop
        index = index + 1

        var x = allPlayerInfo[i].positionX
        var y = height - allPlayerInfo[i].positionY
        // console.log(y)

        // index=1  index-1 =1-1=0
        // cars[0]= car1   cars[1]= car2
        cars[index - 1].position.x = x
        cars[index - 1].position.y = y
      }

      if (keyIsDown(UP_ARROW)) {
        myplayer.positionY += 10
        myplayer.updatePlayer()
      }
      drawSprites()
    }

  }

  // gamestate=2
  end() {

  }


}
