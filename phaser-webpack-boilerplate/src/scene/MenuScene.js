import Doodlescene from "./doodle-scene";

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super("MenuScene",config);
    }

    preload (){
        this.load.image("Sky","assets/sky.png");
    }
    create() {
        // Fondo del menú
        //this.add.image(0, 0, "menuBackground").setOrigin(0, 0);

        // Título del juego
        this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY - 100,
            "Ranita Saltarina",
            {
                fontSize: "48px",
                fontFamily: "Arial",
                color: "#ffffff",
            }
        ).setOrigin(0.5);

        // Botón de inicio
        const startButton = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            "Iniciar Juego",
            {
                fontSize: "32px",
                fontFamily: "Arial",
                color: "#ffffff",
                backgroundColor: "#000000",
                padding: {
                    left: 20,
                    right: 20,
                    top: 10,
                    bottom: 10,
                },
            }
        ).setOrigin(0.5);

        // Manejador de eventos para el botón de inicio
        startButton.setInteractive();
        startButton.on("pointerup", () => {
            this.scene.start("main-scene");
        });
    }
}