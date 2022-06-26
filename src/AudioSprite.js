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
  }

  showSmallSpriteX(x) {
    this.smallSprite.visible = true;
    this.muteBtn.visible = true;
    this.soloBtn.visible = true;


    this.smallSprite.setX(x)
    this.muteBtn.setX(x - 15)
    this.soloBtn.setX(x + 15)
  }
}

export default AudioSprite