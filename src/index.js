
import Phaser from "phaser";
import AudioSprite from "./AudioSprite";

class Example extends Phaser.Scene {
  constructor() {
    super();

    this.trackSprites = [];

  }


  preload() {


    this.load.spritesheet('pic1', 'assets/gms/images/1-spread.png', { frameWidth: 300, frameHeight: 300 });
    this.load.spritesheet('pic2', 'assets/gms/images/2-spread.png', { frameWidth: 300, frameHeight: 300 });
    this.load.spritesheet('pic3', 'assets/gms/images/3-spread.png', { frameWidth: 300, frameHeight: 300 });
    this.load.spritesheet('pic4', 'assets/gms/images/4-spread.png', { frameWidth: 300, frameHeight: 300 });
    this.load.spritesheet('pic5', 'assets/gms/images/8-spread.png', { frameWidth: 300, frameHeight: 300 });
    this.load.spritesheet('pic6', 'assets/gms/images/6-spread.png', { frameWidth: 300, frameHeight: 300 });
    this.load.spritesheet('pic7', 'assets/gms/images/7-spread.png', { frameWidth: 300, frameHeight: 300 });
    this.load.spritesheet('pic8', 'assets/gms/images/5-spread.png', { frameWidth: 300, frameHeight: 300 });
    this.load.spritesheet('pic9', 'assets/gms/images/9-spread.png', { frameWidth: 300, frameHeight: 300 });

    this.load.spritesheet('mute', 'assets/gms/sprites/mute-sheet.png', { frameWidth: 64, frameHeight: 64 })
    this.load.spritesheet('solo', 'assets/gms/sprites/headphone-sheet.png', { frameWidth: 64, frameHeight: 64 })

    this.load.bitmapFont('nokia', 'assets/fonts/bitmapFonts/nokia16black.png', 'assets/fonts/bitmapFonts/nokia16black.xml');

    this.load.audioSprite('sfx', 'assets/audio/SoundEffects/fx_mixdown.json', [
      'assets/audio/SoundEffects/fx_mixdown.ogg',
      'assets/audio/SoundEffects/fx_mixdown.mp3'
    ]);

    this.load.audio("wav1", ["assets/gms/audio/1.wav"])
    this.load.audio("wav2", ["assets/gms/audio/2.wav"])
    this.load.audio("wav3", ["assets/gms/audio/3.wav"])
    this.load.audio("wav4", ["assets/gms/audio/4.wav"])
    this.load.audio("wav5", ["assets/gms/audio/5.wav"])
    this.load.audio("wav6", ["assets/gms/audio/6.wav"])
    this.load.audio("wav7", ["assets/gms/audio/7.wav"])
    this.load.audio("wav8", ["assets/gms/audio/8.wav"])
    this.load.audio("wav9", ["assets/gms/audio/9.wav"])

    this.load.audio("BAD", ["assets/gms/audio/BAD.wav"])
    this.load.audio("CHORUS1", ["assets/gms/audio/CHORUS1.wav"])
    this.load.audio("HEY", ["assets/gms/audio/HEY.wav"])
    this.load.audio("HORN1", ["assets/gms/audio/HORN1.wav"])
    this.load.audio("HORN2", ["assets/gms/audio/HORN2.wav"])
    this.load.audio("HORNSTOGETHER", ["assets/gms/audio/HORNSTOGETHER.wav"])
    this.load.audio("HSDROPOUT", ["assets/gms/audio/HSDROPOUT.wav"])
    this.load.audio("ITEACH", ["assets/gms/audio/ITEACH.wav"])
    this.load.audio("ITHOUGHT", ["assets/gms/audio/ITHOUGHT.wav"])
    this.load.audio("KEYBOARD1", ["assets/gms/audio/KEYBOARD1.wav"])
    this.load.audio("KICKS1", ["assets/gms/audio/KICKS1.wav"])
    this.load.audio("LETGRAP", ["assets/gms/audio/LETGRAP.wav"])
    this.load.audio("Pushup", ["assets/gms/audio/Pushup.wav"])
    this.load.audio("SNARE1", ["assets/gms/audio/SNARE1.wav"])
    this.load.audio("SNARE2", ["assets/gms/audio/SNARE2.wav"])
    this.load.audio("SNARE3", ["assets/gms/audio/SNARE3.wav"])
    this.load.audio("SNARECOMBO2", ["assets/gms/audio/SNARECOMBO2.wav"])
    this.load.audio("SNAREHATCOMBO1", ["assets/gms/audio/SNAREHATCOMBO1.wav"])
    this.load.audio("SOMEOFYOUSWEARWHATIMSPITTIN", ["assets/gms/audio/SOMEOFYOUSWEARWHATIMSPITTIN.wav"])
    this.load.audio("SUPPORTTHEARTIST", ["assets/gms/audio/SUPPORTTHEARTIST.wav"])
    this.load.audio("ZSHUMPDUMPDANUMP", ["assets/gms/audio/ZSHUMPDUMPDANUMP.wav"])

  }

  create() {
    let wav1 = this.sound.add("wav1", { loop: true })

    const musicMap =
    {
      "wav1": this.sound.add("wav1", { loop: true }),
      "wav2": this.sound.add("wav2", { loop: true }),
      "wav3": this.sound.add("wav3", { loop: true }),
      "wav4": this.sound.add("wav4", { loop: true }),
      "wav5": this.sound.add("wav5", { loop: true }),
      "wav6": this.sound.add("wav9", { loop: true }),
      "wav7": this.sound.add("wav6", { loop: true }),
      "wav8": this.sound.add("wav7", { loop: true }),
      "wav9": this.sound.add("wav8", { loop: true }),


      "BAD": this.sound.add("BAD", { loop: true }),
      "CHORUS1": this.sound.add("CHORUS1", { loop: true }),
      "HEY": this.sound.add("HEY", { loop: true }),
      "HORN1": this.sound.add("HORN1", { loop: true }),
      "HORN2": this.sound.add("HORN2", { loop: true }),
      "HORNSTOGETHER": this.sound.add("HORNSTOGETHER", { loop: true }),
      "HSDROPOUT": this.sound.add("HSDROPOUT", { loop: true }),
      "ITEACH": this.sound.add("ITEACH", { loop: true }),
      "ITHOUGHT": this.sound.add("ITHOUGHT", { loop: true }),
      "KEYBOARD1": this.sound.add("KEYBOARD1", { loop: true }),
      "LETGRAP": this.sound.add("LETGRAP", { loop: true }),
      "Pushup": this.sound.add("Pushup", { loop: true }),
      "SNARE1": this.sound.add("SNARE1", { loop: true }),
      "SNARE2": this.sound.add("SNARE2", { loop: true }),
      "SNARE3": this.sound.add("SNARE3", { loop: true }),
      "SNARECOMBO2": this.sound.add("SNARECOMBO2", { loop: true }),
      "SNAREHATCOMBO1": this.sound.add("SNAREHATCOMBO1", { loop: true }),
      "SOMEOFYOUSWEARWHATIMSPITTIN": this.sound.add("SOMEOFYOUSWEARWHATIMSPITTIN", { loop: true }),
      "SUPPORTTHEARTIST": this.sound.add("SUPPORTTHEARTIST", { loop: true }),
      "ZSHUMPDUMPDANUMP": this.sound.add("ZSHUMPDUMPDANUMP", { loop: true }),
    }

    const SquareSongTileMap = {
      "1": ["HSDROPOUT", "ITEACH"],
      "2": ["HORN1", "HORN2", "HORNSTOGETHER"],
      "3": ["KICKS1"],
      "4": ["SOMEOFYOUSWEARWHATIMSPITTIN", "ITHOUGHT", "LETGRAP"],
      "5": ["SNARECOMBO2", "SNAREHATCOMBO1"],
      "6": ["ZSHUMPDUMPDANUMP", "CHORUS1"],
      "7": ["Pushup", "SUPPORTTHEARTIST", "BAD"],
      "8": ["HEY", "keyboard"],
      "9": ["SNARE1", "SNARE2", "SNARE3"]
    }


    const spritemap = this.cache.json.get('sfx').spritemap;

    let i = 0;
    const division = 3

    for (let spriteName in spritemap) {
      if (!spritemap.hasOwnProperty(spriteName)) {
        continue;
      }


      const button = this.makeButton(spriteName, config.width / division * (i % division + 1 / 2), (Math.floor(i / division) + .5) * (config.height - 200) / division);



      this.trackSprites[spriteName] = new AudioSprite(spriteName, button)
      this.trackSprites[spriteName].textSprite = this.add.text(config.width / division * (i % division), (Math.floor(i / division)) * (config.height - 200) / division, this.trackSprites[spriteName].trackNumber)
      this.trackSprites[spriteName].audio = musicMap[this.trackSprites[spriteName].audioName]
      this.trackSprites[spriteName].audio.play()
      this.trackSprites[spriteName].audio.pause()
      i++;
    }

    this.createTrackSprites()
  }

  createTrackSprites() {
    const trackSprites = this.trackSprites
    for (let idx in trackSprites) {


      const trackSprite = trackSprites[idx]

      trackSprite.smallSprite = this.add.image(70 * idx, 800, trackSprite.picName, 1).setScale(.2)


      trackSprite.muteBtn = this.add.image(70 * idx - 15, 800 + 70, 'mute', 1).setScale(.5)
      trackSprite.soloBtn = this.add.image(70 * idx + 15, 800 + 70, 'solo', 1).setScale(.5)
      trackSprite.hideSmallSprite()

      trackSprite.setButtonFrame = this.setButtonFrame
      trackSprite.setMuteFrame = this.setMuteFrame
      trackSprite.setSoloFrame = this.setSoloFrame

      trackSprite.updateVisualAllMusicFrames = () => this.updateVisualAllMusicFrames

      trackSprite.muteAll = () => {
        this.muteAllSongs()
      }

      trackSprite.unSoloAll = () => {
        this.unSoloAll()
      }

      trackSprite.setupButtons()

    }
    // this.muteAllSongs();
  }



  muteAllSongs() {



    const trackSprites = this.trackSprites
    console.log(trackSprites)

    for (let idx in trackSprites) {

      const trackSprite = trackSprites[idx]


      // trackSprite.audio.mute = false
      trackSprite.mute()

    }

  }


  makeButton(name, x, y) {
    const button = this.add.image(x, y, 'pic' + name, 1)
      .setInteractive();
    button.name = name;
    button.setScale(.8, .8);
    return button
  }

  unSoloAll() {
    const trackSprites = this.trackSprites
    for (let idx in trackSprites) {

      const trackSprite = trackSprites[idx]
      this.setSoloFrame(trackSprite.soloBtn, 1)
    }
  }

  updateVisualAllMusicFrames() {
    const trackSprite = this.trackSprites
    for (let idx in trackSprites) {
      trackSprite[idx].updateVisuals()
    }
  }

  setButtonFrame(button, frame) {
    button.frame = button.scene.textures.getFrame('pic' + button.name, frame);
  }

  setMuteFrame(muteObject, frame) {
    muteObject.frame = muteObject.scene.textures.getFrame('mute', frame)
  }

  setSoloFrame(soloObject, frame) {
    soloObject.frame = soloObject.scene.textures.getFrame('solo', frame)
  }

}



const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 700,
  height: 900,
  scene: [Example],
  pixelArt: true,
  backgroundColor: '#FFFFFF',
  audio: {
    disableWebAudio: true
  }
};

new Phaser.Game(config);