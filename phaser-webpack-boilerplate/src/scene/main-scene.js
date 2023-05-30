import Maincharacter from "../character";
import Plataformas from "../plataformas";
import Doodlescene from "./doodle-scene";
import MenuScene from "./MenuScene";
//import Score from "../score";
export default class GameScene extends Doodlescene {
    constructor (config){
        super ("MainScene",config);
        this.ranita=null;
        this.ranitaCollision = null;
        this.plataformas = null;
    }
    preload (){
        this.load.image("Sky","assets/sky.png")
        this.load.image("rana","assets/rana.png")
        this.load.image("plata","assets/plataformita.png")
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
        this.plataformas. spawnMultiplePlatforms (5);
       // this.cameras.main.setBounds(0,0,bg,displayWidth,bg,displayHeight);
        //this.cameras.main.startFollow(this.ranita);
        //Align.scaleToGameW(bg, 2);
    }
    touchPlatform (){

    }
}