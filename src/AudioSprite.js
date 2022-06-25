class AudioSprite {
    constructor(title = null, button = null) {
        this.title = title
        this.toggled = false;
        this.smallSprite;
        this.audio;
        this.audioName="wav"+title;
        this.picName = "pic"+title;
        this.muteBtn
        this.soloBtn
    }
  }

export default AudioSprite