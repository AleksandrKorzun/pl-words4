// import { SHEETS } from './constants/assets';

export default class Modal extends Phaser.GameObjects.Container {
  constructor(scene, isWin) {
    super(scene, 0, 0);
    this.tweens = scene.tweens;
    this.addProperties(["pos"])
      .setCustomPosition(0, 0, 0, 0)
      .setScale(0)
      .setCustomAlign("Center")
      .setDepth(25)
      .setAlpha(0);
    this.isPortrait = this.scene.game.size.isPortrait;
    this.addModal();
  }

  addModal() {
    this.modal = this.scene.add.image(0, 0, "modal").setDepth(5);
    this.title_bottom = this.scene.add
      .image(0, 110, this.scene.correct >= 4 ? "title_b_win" : "title_b_loose")
      .setDepth(7);
    this.stat = this.scene.add
      .image(0, -95, `stat_${this.scene.correct}`)
      .setScale(0.65)
      .setDepth(9);
    this.continue = this.scene.add
      .image(0, 430, "atlas", "continue")
      .setDepth(17);
    this.title_top = this.scene.add
      .image(0, -300, this.scene.correct >= 4 ? "title_t_win" : "title_t_loose")
      .setDepth(7);
    this.add([
      this.modal,
      this.title_bottom,
      this.title_top,
      this.continue,
      this.stat,
    ]);
    this._sort();
    this.continue.setInteractive().on("pointerdown", () => {
      this.scene.game.network.openStore();
    });
    this.tweens.add({
      targets: this.continue,
      scale: "*=1.1",
      duration: 800,
      yoyo: true,
      repeat: -1,
      delay: 200,
      easy: "Sine.in",
    });
  }

  show() {
    this.tweens.add({
      targets: this,
      scale: 0.8,
      alpha: 1,
      ease: "Sine.out",
      duration: 500,
    });
    return this;
  }

  move() {
    this.tweens.add({
      targets: this,
      delay: 500,
      scale: "*=0.95",
      repeat: -1,
      yoyo: true,
      duration: 1500,
    });
  }

  remove() {
    this.tweens.add({
      targets: this,
      alpha: 0,
      duration: 500,
      ease: "Sine.out",
    });
  }

  blink() {
    this.show();
    setTimeout(() => this.remove(), 2500);
  }

  scaleTitle() {
    this.tweens.add({
      targets: this,
      scaleX: 0.3,
      duration: 700,
      ease: "Sine.out",
    });
  }
}
