
import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  width: 700,
  height: 700,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: {
    preload: preload,
    create: create
  }
};

new Phaser.Game(config);


function preload() {
  this.load.image('title', 'assets/pics/gms.png');

  this.load.spritesheet('button', 'assets/buttons/flixel-button.png', { frameWidth: 100, frameHeight: 100 });

  this.load.bitmapFont('nokia', 'assets/fonts/bitmap/nokia16black.png', 'assets/fonts/bitmap/nokia16black.xml');

  this.load.image('bird', 'assets/bird.png');
  this.load.json('sfx', 'assets/audio/SoundEffects/fx_mixdown.json');

  this.load.audio('sfx', [
    'assets/audio/SoundEffects/fx_mixdown.ogg',
    'assets/audio/SoundEffects/fx_mixdown.mp3'
  ]);
}

function create() {

  // this.add.sprite(config.width / 2, config.height / 2 + 100, 'button').setOrigin(0);


  this.add.image(config.width / 2, config.height / 2, 'title').setScale(.23);

  // this.add.image(config.width/2, config.height/2, 'title');

  // bird = this.add.sprite(config.width / 2, config.height / 2, 'bird').setOrigin(0)
  var spritemap = this.cache.json.get('sfx').spritemap;


  // bird = this.add.sprite(config.width / 2, config.height / 2, 'bird').setOrigin(0)

  var i = 0;
  for (var spriteName in spritemap) {
    if (!spritemap.hasOwnProperty(spriteName)) {
      continue;
    }

    makeButton.call(this, spriteName, 680, 115 + i * 40);

    i++;
  }

  this.input.on('gameobjectover', function (pointer, button) {
    setButtonFrame(button, 0);
  });
  this.input.on('gameobjectout', function (pointer, button) {
    setButtonFrame(button, 1);
  });
  this.input.on('gameobjectdown', function (pointer, button) {
    this.sound.playAudioSprite('sfx', button.name);

    setButtonFrame(button, 2);

  }, this);
  this.input.on('gameobjectup', function (pointer, button) {
    setButtonFrame(button, 0);
  });
}

function makeButton(name, x, y) {
  var button = this.add.image(x, y, 'button', 1).setInteractive();
  button.name = name;
  button.setScale(2, 1.5);

  var text = this.add.bitmapText(x - 40, y - 8, 'nokia', name, 16);
  text.x += (button.width - text.width) / 2;
}

function setButtonFrame(button, frame) {
  button.frame = button.scene.textures.getFrame('button', frame);
}