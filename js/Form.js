class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  // setPosition
  setPosition() {
    this.titleImg.position(120, 160);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }


  // setStyle
  setStyle() {
    this.titleImg.class("gameTitle")
    this.input.class("customInput")
    this.playButton.class("customButton")
    this.greeting.class("greeting")
  }

  hide(){
    this.input.hide()
    this.playButton.hide()
    this.greeting.hide()
  }


  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);

      // increase the player count once click the button and update in firebase
      MyplayerCount+=1
      myplayer.updatecount(MyplayerCount)

      myplayer.name=this.input.value()
      myplayer.index=MyplayerCount
      myplayer.addPlayer()
      myplayer.getDistance()
    });
  }




  // display
  display() {
    this.setPosition()
    this.setStyle()
    this.handleMousePressed()

  }

}
