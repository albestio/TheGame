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

    Q.scene("level",function(stage) {
        
        var player = new Q.Sprite({
            x: 10,
            y: 10,
            asset: 'player.PNG',
            jumpSpeed: -400
        });
        
        player.add('2d, platformerControls');
      
        Q.stageTMX("level1.tmx",stage); 
        stage.insert(player);
        stage.add("viewport");      
    });

    //load assets
    Q.loadTMX("level1.tmx, player.PNG", function() {       
      Q.stageScene("level");
    });
});