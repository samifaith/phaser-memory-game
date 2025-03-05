import { Scene } from 'phaser';

export class Preloader extends Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    //  We loaded this image in our Boot Scene, so we can display it here
    this.add.image(window.innerWidth / 2, window.innerHeight / 2, 'background');
  }

  preload() {
    //  Load the assets for the game - Replace with your own assets
    this.load.setPath("assets");
  
    this.load.image("card", "card.png");
    this.load.image("card1", "card1.png");
    this.load.image("card2", "card2.png");
    this.load.image("card3", "card3.png");
    this.load.image("card4", "card4.png");
    this.load.image("card5", "card5.png");
  }

  create() {
    this.scene.start('MainMenu');
  }
}