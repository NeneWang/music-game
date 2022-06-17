
import Phaser from "phaser";
class Example extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.image('title', 'assets/pics/gms.png');

    this.load.spritesheet('button', 'assets/ui/flixel-button.png', { frameWidth: 80, frameHeight: 20 });

    this.load.bitmapFont('nokia', 'assets/fonts/bitmapFonts/nokia16black.png', 'assets/fonts/bitmapFonts/nokia16black.xml');

    this.load.audioSprite('sfx', 'assets/audio/SoundEffects/fx_mixdown.json', [
      'assets/audio/SoundEffects/fx_mixdown.ogg',
      'assets/audio/SoundEffects/fx_mixdown.mp3'
    ]);
  }

  create() {
    
    this.add.image(config.width / 2, config.height / 2, 'title').setScale(.23);

    // this.add.image(400, 300, 'title');

    const spritemap = this.cache.json.get('sfx').spritemap;

    console.log(spritemap)
    this.sound.playAudioSprite('sfx', 'boss hit');
    // this.makeButton('mew', 680, 115 + i * 40);


    let i = 0;
    for (let spriteName in spritemap) {
      if (!spritemap.hasOwnProperty(spriteName)) {
        continue;
      }
      this.makeButton(spriteName, 680, 115 + i * 40);
      console.log("Here")
      i++;
    }

    this.input.on('gameobjectover', function (pointer, button) {
      this.setButtonFrame(button, 0);
    }, this);

    this.input.on('gameobjectout', function (pointer, button) {
      this.setButtonFrame(button, 1);
    }, this);

    this.input.on('gameobjectdown', function (pointer, button) {
      this.sound.playAudioSprite('sfx', button.name);
      this.setButtonFrame(button, 2);
    }, this);

    this.input.on('gameobjectup', function (pointer, button) {
      this.setButtonFrame(button, 0);
    }, this);

  }

  makeButton(name, x, y) {
    const button = this.add.image(x, y, 'button', 1)
      .setInteractive();
    button.name = name;
    button.setScale(2, 1.5);

    const text = this.add.bitmapText(x - 40, y - 8, 'nokia', name, 16);
    text.x += (button.width - text.width) / 2;
  }

  makeButton2(name, x, y) {
    const button = this.add.image(x, y, 'button', 1)
      .setInteractive();
    button.name = name;
    button.setScale(2, 1.5);

    const text = this.add.bitmapText(x - 40, y - 8, 'nokia', name, 16);
    text.x += (button.width - text.width) / 2;
  }

  setButtonFrame(button, frame) {
    button.frame = button.scene.textures.getFrame('button', frame);
  }

  setButtonFrame2(button, frame) {
    button.frame = button.scene.textures.getFrame('button', frame);
  }
}

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 700,
  height: 700,
  scene: [Example],
  pixelArt: true,
  audio: {
    disableWebAudio: true
  }
};

new Phaser.Game(config);