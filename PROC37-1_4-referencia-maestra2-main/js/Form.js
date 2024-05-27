class Form {
  constructor() {
    
  }

  setElementsPosition() {
    


  }

 /* setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  } */

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hola ${this.input.value()}
      </br>Espera a que se una otro jugador...`;
      this.greeting.html(message);
      player.name = this.input.value();
      player.index = 1;
      //player.addPlayer();
    });
  }

  display() {
   this.setElementsPosition();
    //this.setElementsStyle();
    this.handleMousePressed();
  }
}
