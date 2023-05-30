export default class Score {
constructor (scene,x,y,layer){
    this.scene = scene;
    this.score = 0;
    this.text = scene.add.text(x, y, "Score: 0", {
      fontFamily: "Arial",
      fontSize: "24px",
      fill: "#ffffff",
    });
    this.text.setScrollFactor(0);
    this.layer = layer;
}
updateScore() {
    // Increase the score based on the character's position
    const characterY = this.layer.y - this.scene.cameras.main.height + this.scene.character.y;
    const scoreIncrease = Math.max(0, Math.floor(characterY / 10));
    this.score += scoreIncrease;
    this.text.setText("Score: " + this.score);
  }
}