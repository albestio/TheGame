window.addEventListener("load", function () {
    var Q = window.Q = Quintus({development: true})
        .include("Scenes, Sprites, 2D, Input, Touch, UI, TMX, Audio")
        .setup({
            width: 2000,
            height: 2000,
            scaleToFit: true
        })
        .controls()
        .touch();
    Q.setImageSmoothing(false);
    
    Q.Sprite.extend("Player", {
        init: function (p) {
            this._super(p, { x: 0, y: 0, asset: "player.PNG", jumpSpeed: -400 });
            this.add("2d, platformerControls");
        },
        step: function (dt) {
            
            var getTileLocation = function (x, y) {
                var x1 = Math.floor(x / 80),
                    y1 = Math.floor(y / 80);
                
                return {x: x1, y: y1};
            };
            
            if (Q.inputs.down) {
                var ground = Q.stage().locate(this.p.x, this.p.y + this.p.h, Q.SPRITE_DEFAULT);
                if (ground && ground.p) {
                    var point = getTileLocation(this.p.x, this.p.y);
                    ground.p.tiles[point.y + 1][point.x] = null;
                }
            }
        }
    });

    Q.scene("level", function (stage) {
        Q.stageTMX("level1.tmx", stage);
        stage.insert(new Q.Player());
        stage.add("viewport");
    });

    //load assets
    Q.loadTMX("level1.tmx, player.PNG", function () {
        Q.stageScene("level");
    });
});