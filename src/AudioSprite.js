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
  }

  setButtonFrame(button, frame) {
    this.frame = this.scene.textures.getFrame(button.picName, frame);
  }

  leftAsToggled(button) {
    if (this.toggled) {
      this.setButtonFrame(button, 2);
    }
  }

  setupButtons() {

    console.log("Setting buttons for ")
    // Setup the Main Buttons
    this.button.setInteractive()

    console.log("Made Interactive ")
    console.log(this.button)

    this.button.on('pointerout', () => {
      // this.setButtonFrame(this, 1);
      // this.leftAsToggled(this)
      
      console.log("POinterout button")
    })
    this.button.on('pointerdown', () => {
      console.log("pointerdown button")
    })
    this.button.on('pointerup', () => {
      console.log("pointerup")
    })


    // Setup the Small Sprites
    this.smallSprite.setInteractive()
    this.smallSprite.on('pointerover', () => { console.log('pointerover'); });


    console.log("Setting buttons finished ")
  }

  showSmallSpriteX(x) {
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