class AudioSprite {
  constructor(title = null, button = null) {
    this.title = title
    this.toggled = false;
    this.smallSprite;
    this.audio;
    this.audioName = "wav" + title;
    this.picName = "pic" + title;
    this.muteBtn
    this.soloBtn
    this.button = button

    this.trackSpritesRef

    // Functions I will need to initiate later on, or everyting breaks
    this.setButtonFrame
    this.leftAsToggled
  }

  setupButtons() {

    console.log("Setting buttons for ")
    // Setup the Main Buttons
    this.button.setInteractive()

    console.log("Made Interactive ")
    console.log(this.button)

    this.button.on('pointerover', () => {
      // this.setButtonFrame(this, 1);
      // this.leftAsToggled(this)

      this.setButtonFrame(this.button, 0)

      // console.log("POinterout button")
    })

    this.button.on('pointerout', () => {

      this.setButtonFrame(this.button, 1);
    })


    this.button.on('pointerdown', () => {

      this.setButtonFrame(this.button, 2);

      console.log(this.trackSpritesRef)

      this.toggled=!this.toggled

      if(this.toggled){
        this.audio.resume()
        this.showSmallSpriteX(70)
      }else{
        this.audio.pause()
        this.hideSmallSprite(70)
      }
      this.setButtonFrame(this.button, 2)
      
    
      console.log("pointerdown button")
    })


    this.button.on('pointerup', () => {
      this.setButtonFrame(this.button, 1)
      console.log("pointerup")
    })


    // Setup the Small Sprites
    this.smallSprite.setInteractive()
    this.smallSprite.on('pointerover', () => { console.log('pointerover'); });


    console.log("Setting buttons finished ")
  }

  showSmallSpriteX(x) {
    console.log(x)
    this.smallSprite.visible = true;
    this.muteBtn.visible = true;
    this.soloBtn.visible = true;


    this.smallSprite.setX(x)
    this.muteBtn.setX(x - 15)
    this.soloBtn.setX(x + 15)
  }

  hideSmallSprite() {
    this.smallSprite.visible = false;
    this.muteBtn.visible = false;
    this.soloBtn.visible = false;

  }
}

export default AudioSprite