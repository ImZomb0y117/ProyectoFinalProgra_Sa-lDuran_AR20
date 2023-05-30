const JUMP_VELOCITY = 300;

export default class Maincharacter extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        this.scene = scene;
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.immovable = true;
        scene.input.keyboard.on("keydown-SPACE", this.jump, this);
        scene.input.keyboard.on("keydown-LEFT",this.moveLeft,this);
        scene.input.keyboard.on("keydown-RIGHT",this.moveRight,this);
        scene.input.keyboard.on("keyup-LEFT",this.stopMoving, this);
        scene.input.keyboard.on("keyup-RIGHT",this.stopMoving,this);
        this.speed= 200;
        this.isMoving = false;
        this.defaultScale = this.scaleX;
        this.blocked = false;
        this.isJumping = false;
 }
    jump(){
    if (!this.isJumping) {
        this.body.velocity.y = -JUMP_VELOCITY;
        this.isJumping = true;
    }
}
    moveLeft() {
        this.body.velocity.x = -this.speed;
        this.isMoving = true;
        // You may also flip the character sprite horizontally to face the left direction
        this.flipX = true;
    }
    
    moveRight() {
        this.body.velocity.x = this.speed;
        this.isMoving = true;
        // Reset the flipX property to its default value
        this.flipX = false;
    }
    stopMoving() {
        this.body.velocity.x = 0;
        this.isMoving = false;
    }
    onPlatformCollision() {
        this.isJumping = false;
    }
}           