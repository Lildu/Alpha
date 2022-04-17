class scene extends Phaser.Scene {

    preload() {
        this.load.image('background', 'assets/images/background.png');
        this.load.image('spike', 'assets/images/spike.png');
        // At last image must be loaded with its JSON
        this.load.atlas('player', 'assets/images/kenney_player.png', 'assets/images/kenney_player_atlas.json');
        this.load.image('tiles', 'assets/tilesets/platformPack_tilesheet.png');

        this.load.image('dude', 'assets/images/dude.png');


        this.load.spritesheet('walk', 'assets/images/tilesheet/tilesheet-walk.png',{ frameWidth: 512, frameHeight: 512 });
        this.load.spritesheet('idle', 'assets/images/tilesheet/tilesheet-idle.png',{ frameWidth: 512, frameHeight: 512 });
        this.load.spritesheet('shield', 'assets/images/tilesheet/tilesheet-shield.png',{ frameWidth: 512, frameHeight: 512 });
        this.load.spritesheet('sword', 'assets/images/tilesheet/tilesheet-sword2.png',{ frameWidth: 512, frameHeight: 512 });
        this.load.spritesheet('up', 'assets/images/tilesheet/tilesheet-gun-up.png',{ frameWidth: 512, frameHeight: 512 });
        this.load.spritesheet('midle', 'assets/images/tilesheet/tilesheet-gun-midle.png',{ frameWidth: 512, frameHeight: 512 });
        this.load.spritesheet('down', 'assets/images/tilesheet/tilesheet-gun-down.png',{ frameWidth: 512, frameHeight: 512 });

        // Load the export Tiled JSON
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/Alpha1.json');
    }


    create() {





        const backgroundImage = this.add.image(0, 0, 'background').setOrigin(0, 0);
        backgroundImage.setScale(1, 0.8);
        const map = this.make.tilemap({key: 'map'});

        const tileset = map.addTilesetImage('Alpha_test1', 'tiles');
        this.platforms = map.createStaticLayer('Sol', tileset);

        this.platforms.setCollisionByExclusion(-1, true);
        this.cursors = this.input.keyboard.createCursorKeys();


        this.player = new Player(this)

        this.cameras.main.startFollow(this.player.player,false);
    }


    update() {

        switch (true) {
            case (this.cursors.space.isDown || this.cursors.up.isDown) && this.player.player.body.onFloor():
                this.player.jump()
                console.log("oui")
                break;
            case this.cursors.left.isDown:
                this.player.moveLeft()
                break;
            case this.cursors.right.isDown:
                this.player.moveRight();
                break;
            case this.cursors.
            default:
                this.player.stop();
        }





    }
}