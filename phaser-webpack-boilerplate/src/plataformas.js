export default class Plataformas {
    constructor(scene, layer){
        this.scene = scene;
        this.layer = layer;
        this.group = scene.physics.add.group({
            allowGravity: false,
            immovable: true
});
this.plataformas = [];
this.pool = [];
    }
    spawnPlatform() {
        const screenWidth = this.scene.cameras.main.width;
        const screenHeight = this.scene.cameras.main.height;

        // Generate random coordinates for the platform
        const randomX = Phaser.Math.Between(0, screenWidth);
        const randomY = Phaser.Math.Between(0, screenHeight);

        // Create a platform sprite at the random coordinates
        const platform = this.group.create(randomX, randomY, "plata");

        // Additional platform setup, such as scaling, physics properties, etc.
        this.scene.physics.world.enable(platform);
        platform.body.immovable = true;

        this.plataformas.push(platform);
    }
    spawnMultiplePlatforms(numPlatforms) {
        for (let i = 0; i < numPlatforms; i++) {
            this.spawnPlatform();
        }
    }
}