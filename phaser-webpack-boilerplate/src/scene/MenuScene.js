import Doodlescene from "./doodle-scene";

export default class MenuScene extends Doodlescene {
    constructor(config) {
        super("MenuScene", config);
    }

    preload (){
        this.load.image("Sky","assets/sky.png");
    }
    create() {
        const playButtonCallbacks = {
            onClick: this.playButton_OnClick,
            onMouseEnter: this.anyButton_OnMouseEnter,
            onMouseExit: this.anyButton_OnMouseExit
        }

        const scoreButtonCallbacks = {
            onClick: this.playButton_OnClick,
            onMouseEnter: this.anyButton_OnMouseEnter,
            onMouseExit: this.anyButton_OnMouseExit
        }

        const mainMenu = {
            items: [
                {label: "Play", style: {fontSize: "32px", fill: "#FFF"}, ...playButtonCallbacks},
                {label: "Score", style: {fontSize: "32px", fill: "#FFF"}, ...scoreButtonCallbacks},
            ],
            firstItemPosition: {x: this.config.width / 2, y: this.config.height / 2},
            origin: {x: 0.5, y: 0.5},
            spacing: 45
        }
        this.showMenu(mainMenu);
    }

    playButton_OnClick() {
        this.scene.start("MainScene");
    
    }
    scoreButton_OnClick() {
        this.scene.start("ScoreScene");
    }

    anyButton_OnMouseEnter(text) {
        text.setFill("#0F0");
    }

    anyButton_OnMouseExit(text) {
        text.setFill("#FFF");
    }
}