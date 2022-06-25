class AudioSprite {
    constructor(title = null, button = null) {
        this.title = title
        this.toggled = false;
        this.smallSprite;
        this.audio;
        this.audioName="wav"+title;
    }
  }

export default AudioSprite