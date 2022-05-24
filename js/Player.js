class Player {
  constructor() {
    this.name = null
    this.index = null
    this.positionX = 0
    this.positionY = 0
    this.fuel = 0
    this.coins = 0

  }
  getplayercount() {
    var countroot = database.ref("playerCount");
    countroot.on("value", (data) => {
      MyplayerCount = data.val();
    });
  }
  updatecount(count) {
    database.ref("/").update({
      playerCount: count,
    });
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index
    if (this.index === 1) {
      this.positionX = width / 2 + 100
    }
    else {
      this.positionX = width / 2 - 100
    }

    database.ref(playerIndex).set({
      name: this.name,
      index: this.index,
      positionX: this.positionX,
      positionY: this.positionY,
      fuels:this.fuel,
      coins:this.coins
    })
  }


  getDistance() {
    var distance = database.ref("players/player" + this.index)
    distance.on("value", (data) => {
      var playerdistance = data.val()
      this.positionX = playerdistance.positionX
      this.positionY = height - playerdistance.positionY
    })
  }

  updatePlayer() {
    var playerIndex = "players/player" + this.index
    database.ref(playerIndex).update({
      positionX: this.positionX,
      positionY: this.positionY,
      fuels:this.fuel,
      coins:this.coins
    })
  }

  static getPlayerInfo() {
    var playerInfo = database.ref("players")
    playerInfo.on("value", (data) => {
      allPlayerInfo = data.val()
    })
  }
}
