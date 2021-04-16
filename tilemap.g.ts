// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "videojuego":
            case "level1":return tiles.createTilemap(hex`19000a0005050505050501050505050505050505050505050505050505050404040405010502020302020202020202020202050101010504040404050105020202020202020202020302020501010105040404040501050302020202020302020202020205010101050404040405010502020202020202020202020202050101010504040404050105020202020202020202020202020501010105040404040501050202030202020202020202030205010101050404040405010502020202020202020202020202050101010504040404050105020202020203020202030202020501010105050505050501050505050505050505050505050505050505`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 2 . . . . . . 
. . . . . . . . 2 . . . . . 2 . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 . . . . . . . . 2 . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 . . . 2 . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,sprites.castle.tileGrass1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
