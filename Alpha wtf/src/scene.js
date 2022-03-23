class scene extends Phaser.Scene {
  function

  preload() {
      this.load.image('background', 'assets/images/background.png');
      this.load.image('spike', 'assets/images/spike.png');
      // At last image must be loaded with its JSON
      this.load.atlas('player', 'assets/images/kenney_player.png','assets/images/kenney_player_atlas.json');
      this.load.image('tiles', 'assets/tilesets/platformPack_tilesheet.png');

      // Load the export Tiled JSON
      this.load.tilemapTiledJSON('map', 'assets/tilemaps/Alpha1.json');
  }


  create() {


      const backgroundImage = this.add.image(0, 0, 'background').setOrigin(0, 0);
      backgroundImage.setScale(2, 0.8);
      const map = this.make.tilemap({key: 'map'});

      const tileset = map.addTilesetImage('Alpha_test1', 'tiles');
      const platforms = map.createStaticLayer('Sol', tileset);

      platforms.setCollisionByExclusion(-1, true);
  }



  update() {

      // Player can jump while walking any direction by pressing the space bar
// or the 'UP' arrow
      if ((this.cursors.space.isDown || this.cursors.up.isDown) && this.player.body.onFloor()) {
          this.player.setVelocityY(-350);
          this.player.play('jump', true);
      }

      if (this.player.body.velocity.x > 0) {
          this.player.setFlipX(false);
      } else if (this.player.body.velocity.x < 0) {
          // otherwise, make them face the other side
          this.player.setFlipX(true);
      }

  }
}