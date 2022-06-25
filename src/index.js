
import Phaser from "phaser";
import AudioSprite from "./AudioSprite";

class Example extends Phaser.Scene {
  constructor() {
    super();

    this.trackSprites = [];

  }


  preload() {

    // this.load.spritesheet('button', 'assets/ui/flixel-button.png', { frameWidth: 80, frameHeight: 20 });

    this.load.spritesheet('pic1', 'assets/gms/images/1-spread.png', { frameWidth: 300, frameHeight: 300 });
    this.load.spritesheet('pic2', 'assets/gms/images/2-spread.png', { frameWidth: 300, frameHeight: 300 });
    this.load.spritesheet('pic3', 'assets/gms/images/3-spread.png', { frameWidth: 300, frameHeight: 300 });
    this.load.spritesheet('pic4', 'assets/gms/images/4-spread.png', { frameWidth: 300, frameHeight: 300 });
    this.load.spritesheet('pic5', 'assets/gms/images/8-spread.png', { frameWidth: 300, frameHeight: 300 });
    this.load.spritesheet('pic6', 'assets/gms/images/6-spread.png', { frameWidth: 300, frameHeight: 300 });
    this.load.spritesheet('pic7', 'assets/gms/images/7-spread.png', { frameWidth: 300, frameHeight: 300 });
    this.load.spritesheet('pic8', 'assets/gms/images/5-spread.png', { frameWidth: 300, frameHeight: 300 });
    this.load.spritesheet('pic9', 'assets/gms/images/9-spread.png', { frameWidth: 300, frameHeight: 300 });

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


    }
    this.add.image(config.width / 2, config.height - 200 / 2, 'title').setScale(.23);


    // this.add.image(400, 300, 'title');
    const spritemap = this.cache.json.get('sfx').spritemap;

    // this.sound.playAudioSprite('1wav');
    // this.makeButton('mew', 680, 115 + i * 40);


    let i = 0;
    const division = 3

    for (let spriteName in spritemap) {
      if (!spritemap.hasOwnProperty(spriteName)) {
        continue;
      }


      // musicMap[spriteName].play()
      // musicMap[spriteName].pause()




      const button = this.makeButton(spriteName, config.width / division * (i % division + 1 / 2), (Math.floor(i / division) + .5) * (config.height - 200) / division);

      this.trackSprites[spriteName] = new AudioSprite(spriteName, button)

      this.trackSprites[spriteName].audio = musicMap[this.trackSprites[spriteName].audioName]
      this.trackSprites[spriteName].audio.play()
      this.trackSprites[spriteName].audio.pause()


      i++;
    }

    this.input.on('gameobjectover', function (pointer, button) {
      this.setButtonFrame(button, 0);
    }, this);

    this.input.on('gameobjectout', function (pointer, button) {
      this.setButtonFrame(button, 1);
      this.leftAsToggled(button)
    }, this);

    this.input.on('gameobjectdown', function (pointer, button) {
      // this.sound.playAudioSprite('sfx', button.name);
      this.trackSprites[button.name].toggled = !this.trackSprites[button.name].toggled
      this.updateTrackSprites()


      if (this.trackSprites[button.name].toggled) {
        this.trackSprites[button.name].audio.resume()
      } else {
        this.trackSprites[button.name].audio.pause()
      }

      this.setButtonFrame(button, 2);
    }, this);

    this.input.on('gameobjectup', function (pointer, button) {
      this.setButtonFrame(button, 0);
    }, this);


    this.createTrackSprites()

  }

  createTrackSprites() {
    const trackSprites = this.trackSprites
    for (let idx in trackSprites) {

      const trackSprite = trackSprites[idx]
      console.log(trackSprite.picName)
      trackSprite.smallSprite = this.add.image(70 * idx, 800, trackSprite.picName, 1).setScale(.2)
      // trackSprite.smallSprite.setX(70)
      trackSprite.smallSprite.visible = false;


    }
  }

  updateTrackSprites() {
    let activePics = 1;
    const trackSprites = this.trackSprites
    console.log(trackSprites)
    for (const idx in trackSprites) {
      const trackSprite = trackSprites[idx]
      if (trackSprite.toggled) {
        activePics++
        
        trackSprite.smallSprite.setX(70 * activePics)
        trackSprite.smallSprite.visible = true;


      }else{
        trackSprite.smallSprite.visible = false;
      }
    }

  }

  leftAsToggled(button) {
    if (this.trackSprites[button.name].toggled) {
      this.setButtonFrame(button, 2);
    }
  }

  makeButton(name, x, y) {
    const button = this.add.image(x, y, 'pic' + name, 1)
      .setInteractive();
    button.name = name;
    button.setScale(.8, .8);
    return button
  }


  setButtonFrame(button, frame) {
    button.frame = button.scene.textures.getFrame('pic' + button.name, frame);
  }

}

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 700,
  height: 900,
  scene: [Example],
  pixelArt: true,
  audio: {
    disableWebAudio: true
  }
};

new Phaser.Game(config);