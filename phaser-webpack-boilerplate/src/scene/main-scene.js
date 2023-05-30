import Maincharacter from "../character";
import Plataformas from "../plataformas";
import Doodlescene from "./doodle-scene";
import MenuScene from "./MenuScene";
import Score from "../score";
export default class GameScene extends Doodlescene {
    constructor (config){
        super ("MainScene",config);
        this.ranita=null;
        this.ranitaCollision = null;
        this.plataformas = null;
        this.botonPausa = null; 
        this.isPaused = false;
    }
    preload (){
        this.load.image("Sky","assets/sky.png")
        this.load.image("rana","assets/rana.png")
        this.load.image("plata","assets/plataformita.png")
        this.load.image("botonPausa", "assets/pause.png")
    }
    create (){
        super.create ();
        this.plataformas = new Plataformas(this, this.layers.game);
      //  let bg = this.add.image(0, 0, "Sky").setOrigin(0, 0);
        this.ranita = new Maincharacter(this,25,this.config.height/2,"rana");
        this.ranitaCollision = this.physics.add.collider(this.ranita,this.plataformas.group,this.ranita.onPlatformCollision,null,this.ranita);
        this.layers.game.add(this.ranita);
        this.ranita.body.setCollideWorldBounds(true);
        this.plataformas. spawnPlatform ();
        this.plataformas. spawnMultiplePlatforms (15);
       // this.cameras.main.setBounds(0,0,bg,displayWidth,bg,displayHeight);
        //this.cameras.main.startFollow(this.ranita);
        //Align.scaleToGameW(bg, 2);
        this.botonPausa = this.add.sprite(this.config.width - 32, 32,"botonPausa").setInteractive ();
        this.botonPausa. setScale (3);
        this.botonPausa. on ("pointerup", this.paused, this);
        this.score = new Score(this, 10, 10, this.layers.ui);
        this.score.updateScore ();
    }
    update (time,delta){
        if(this.isPaused){

        }
        else {
           this.score.updateScore();
           if (this.ranita.y > this.cameras.main.height) {
            this.gameOver();
        }
    }
    }
    paused(){
        this.physics.pause();
        this.isPaused = true;
        this.botonPausa.setVisible(false);
        const continueButtonCallbacks = {
            onClick: this.resume,
            onMouseEnter: text => text.setFill("#0F0"),
            onMouseExit: text => text.setFill("#FFF"),
        }
      
          const quitButtonCallbacks = {
            onClick: this.quitGame,
            onMouseEnter: text => text.setFill("#F00"),
            onMouseExit: text => text.setFill("#FFF"),
          }
      
          const pauseMenu = {
            items: [
              {label: "Continue", style: {fontSize: "32px", fill: "#FFF"}, ...continueButtonCallbacks},
              {label: "Quit", style: {fontSize: "32px", fill: "#FFF"}, ...quitButtonCallbacks},
          ],
      
      
          firstItemPosition: {x: this.config.width / 2, y: this.config.height / 2},
          origin: {x: 0.5, y: 0.5},
          spacing: 45
          }
      
          this.showMenu(pauseMenu);
          }
          resume(){
            this.physics.resume ();
            this.isPaused = false; 
            this.botonPausa.setVisible (true);
            this.hideMenu ();
          }
          quitGame(){
            this.isPaused = false
            this.scene.start ("MenuScene");
          }
          gameOver(){
           // this.plataformas.stop();
            this.ranitaCollision.destroy();
            this.gameOverMenu(); 
          }
          gameOverMenu(){
            const gameOverText = this.add.text(
                this.config.width / 2,
                this.config.height / 2 - 100,
                "Desvivido.",
                {fontSize: "48px", fill: "#FFF"}
              );
              gameOverText.setOrigin(0.5);
          
              const retryButtonCallbacks = {
                onClick: this.restartGame.bind(this),
                onMouseEnter: text => text.setFill("#0F0"),
                onMouseExit: text => text.setFill("#FFF"),
              };
          
              const quitButtonCallbacks = {
                onClick: this.quitGame.bind(this),
                onMouseEnter: text => text.setFill("#F00"),
                onMouseExit: text => text.setFill("#FFF"),
              };
          
              const gameOverMenu = {
                items: [
                  { label: "Retry", style: { fontSize: "32px", fill: "#FFF" }, ...retryButtonCallbacks },
                  { label: "Quit", style: { fontSize: "32px", fill: "#FFF" }, ...quitButtonCallbacks },
                ],
                firstItemPosition: { x: this.config.width / 2, y: this.config.height / 2 },
                origin: { x: 0.5, y: 0.5 },
                spacing: 45,
              };
          
              this.showMenu(gameOverMenu);
          }
    touchPlatform (){

    }
}