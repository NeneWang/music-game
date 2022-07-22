class AudioSprite {
  constructor(title = null, button = null) {
    this.title = title
    this.toggled = false;
    this.smallSprite;
    this.audio;
    this.audioList;
    this.audioName = "wav" + title;
    this.picName = "pic" + title;

    this.muteBtn
    this.soloBtn
    this.button = button

    this.trackSpritesRef

    // Functions I will need to initiate later on, or everyting breaks
    this.setButtonFrame
    this.setMuteFrame
    this.setSoloFrame
    this.muteAll
    this.unSoloAll

    this.trackNumber = 1
    this.maxTrackNumber = 2
    this.textSprite;
  }

  leftAsToggled() {
    if (this.toggled) {
      this.setButtonFrame(this.button, 2)
    }
  }

  setupButtons() {

    // Setup the Main Buttons
    this.button.setInteractive()


    this.button.on('pointerover', () => {
      // this.setButtonFrame(this, 1);

      this.setButtonFrame(this.button, 0)
      this.textSprite.visible =true
      // this.leftAsToggled()


      
    })

    this.button.on('pointerout', () => {

      this.setButtonFrame(this.button, 1);
      this.leftAsToggled()
      this.textSprite.visible = false



    })


    this.button.on('pointerdown', () => {
      this.handleMusicSpriteClick();


    })

    this.button.on('wheel', (e) => {
      
      
      if (e.event.deltaY > 0) {
        this.increaseAudioTrack()
      }else{
        this.decreaseAudioTrack()
      }
    })


    this.button.on('pointerup', () => {
      this.setButtonFrame(this.button, 1)
      this.leftAsToggled()
    })


    // Setup the Small Sprites
    this.smallSprite.setInteractive()
    this.smallSprite.on('pointerdown', () => {
      this.handleMusicSpriteClick()
    });


    
  }

  showSmallSpriteX() {
    
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
  }


  increaseAudioTrack(){
    this.trackNumber++
    this.confineTrack()
    this.changeAudioTrack(this.trackNumber-1)
    this.updateTrackWithName()
    
  }

  decreaseAudioTrack(){
    this.trackNumber--
    this.confineTrack()
    this.changeAudioTrack(this.trackNumber-1)
    this.updateTrackWithName()
  }

  changeAudioTrack(trackNum){
    
    if(this.toggled){
      // this.audio.pause()
      this.audio.loop=false
    }
    this.audio = this.audioList[trackNum]
    
  }

  playEveryBar(){
    if(this.toggled){
      this.audio.play()
      
    }
  }

  updateTrackWithName(){
    // console.log(this.audioList.key)
    this.updateTrack(`${this.trackNumber} ${this.audioList[this.trackNumber-1].key}`)
  }

  confineTrack(){
    if (this.trackNumber > this.maxTrackNumber) {
      this.trackNumber = 1
    }
    else if (this.trackNumber < 1){
      this.trackNumber = this.maxTrackNumber
    }
  }

  updateTrack(newText){
    
    this.textSprite.setText(newText)
  }


  mute() {
    
    this.audio.mute = true;
    this.updateVisuals()
    this.unSoloAll()
  }

  toggleMute() {
    // Somehow should be able to mute that specific track
    this.audio.mute = !this.audio.mute;
    this.updateVisuals()
    this.unSoloAll()

  }

  updateVisuals() {
    this.setMuteFrame(this.muteBtn, this.audio.mute ? 2 : 1)

  }

  toggleSolo() {
    // It should tell every song to mute (Except for this. I can go with the array and then toggle unmute this one.)
    // this.mute()
    this.muteAll()
    this.audio.mute = false;
    this.unSoloAll()
    this.setSoloFrame(this.soloBtn, 2)
    this.updateVisuals()

  }



  hideSmallSprite() {
    this.smallSprite.visible = false;
    this.muteBtn.visible = false;
    this.soloBtn.visible = false;


  }


  handleMusicSpriteClick() {
    this.setButtonFrame(this.button, 2);

    

    this.toggled = !this.toggled;

    if (this.toggled) {
      if (this.audio.mute) {
        this.audio.mute = false
        this.unSoloAll()
      }
      this.showSmallSpriteX();
    } else {
      this.audio.pause();
      this.hideSmallSprite(70);
    }
    this.setButtonFrame(this.button, 2);
    this.updateVisuals()
  }
}

export default AudioSprite