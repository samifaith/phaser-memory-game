import { Scene } from 'phaser';

export class Game extends Scene {
  background: Phaser.GameObjects.Image;

  constructor() {
    super('Game');
  }

  create() {
    this.background = this.add.image(0, 0, 'background').setOrigin(0, 0);
  }
}