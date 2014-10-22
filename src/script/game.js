window.addEventListener("load", function() {
  var Q = window.Q = Quintus({development: true})
    .include("Scenes, Sprites, 2D, Input, Touch, UI, TMX, Audio")
    //.include("ActionPlatformerPlayer, ActionPlatformerEnemy")
    .setup({
      width: 2000,   //to fit devices with a screne resolution of 1280 x 720
      height: 2000,
      scaleToFit: true
    }).controls().touch();
    
    Q.setImageSmoothing(false);
    
    Q.Sprite.extend("Player", {
        init: function(p) {
            this._super(p, { x: 10, y: 10, asset: 'player.PNG', jumpSpeed: -400 });
            this.add('2d, platformerControls');
        },
        step: function(dt) {
            if(Q.inputs['down']) {
                var ground = Q.stage().locate(this.p.x, this.p.y + this.p.h/2 + 1, Q.SPRITE_DEFAULT);
                ground.p.type = 0;
            }
        }
    });

    Q.scene("level",function(stage) {
        Q.stageTMX("level1.tmx",stage); 
        stage.insert(new Q.Player());
        stage.add("viewport");      
    });

    //load assets
    Q.loadTMX("level1.tmx, player.PNG", function() {       
      Q.stageScene("level");
    });
});


// Q.inputs['down']
//       var ground = Q.stage().locate(this.p.x, this.p.y + this.p.h/2 + 1, Q.SPRITE_DEFAULT);
