window.addEventListener("load",function() {
  var Q = window.Q = Quintus({development: true})
    .include("Scenes, Sprites, 2D, Input, Touch, UI, TMX, Audio")
    //.include("ActionPlatformerPlayer, ActionPlatformerEnemy")
    .setup({
      width: 2000,   //to fit devices with a screne resolution of 1280 x 720
      height: 2000,
      scaleToFit: true
    }).controls().touch();

    //Q.enableSound();
    Q.setImageSmoothing(false);

    Q.scene("level",function(stage) {
      //var player;
      //var levelLayer; 

      Q.stageTMX("level1.tmx",stage); 
      //player = Q("Player").first();
              
      stage.add("viewport");//.follow(player,{x: true, y: true});      
    });

    //load assets
    Q.loadTMX("level1.tmx, SpriteSheet.PNG", function() {       
      Q.compileSheets("SpriteSheet.PNG");     
      Q.stageScene("level");
    });
    
});