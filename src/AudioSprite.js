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
    this.setMuteFrame
    this.muteAll
  }

  setupButtons() {

    // Setup the Main Buttons
    this.button.setInteractive()


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

      this.handleMusicSpriteClick();


    })


    this.button.on('pointerup', () => {
      this.setButtonFrame(this.button, 1)
      console.log("pointerup")
    })


    // Setup the Small Sprites
    this.smallSprite.setInteractive()
    this.smallSprite.on('pointerdown', () => {
      this.handleMusicSpriteClick()
    });


    console.log("Setting buttons finished ")
  }

  showSmallSpriteX() {
    // console.log(x)
    this.smallSprite.visible = true;
    this.muteBtn.visible = true;
    this.soloBtn.visible = true;

    this.muteBtn.setInteractive();
    this.muteBtn.on('pointerdown', () => {
      this.toggleMute()
    })

    this.soloBtn.setInteractive();
    this.soloBtn.on('pointerdown', () => {
      this.toggleSolo()
    })
    // this.soloBtn.setInteractive();


    // this.smallSprite.setX(x)
    // this.muteBtn.setX(x - 15)
    // this.soloBtn.setX(x + 15)
  }
  
  mute(){
    console.log(this.title, "muted")
    this.audio.mute = true;
  }

  toggleMute() {
    // Somehow should be able to mute that specific track
    this.audio.mute = !this.audio.mute;
  }

  toggleSolo() {
    // It should tell every song to mute (Except for this. I can go with the array and then toggle unmute this one.)
    // this.mute()
    this.muteAll()
    this.audio.mute = false;
  }



  hideSmallSprite() {
    this.smallSprite.visible = false;
    this.muteBtn.visible = false;
    this.soloBtn.visible = false;


  }


  handleMusicSpriteClick() {
    this.setButtonFrame(this.button, 2);

    console.log(this.trackSpritesRef);

    this.toggled = !this.toggled;

    if (this.toggled) {
      this.audio.resume();
      this.showSmallSpriteX();
    } else {
      this.audio.pause();
      this.hideSmallSprite(70);
    }
    this.setButtonFrame(this.button, 2);
  }
}

export default AudioSprite