namespace SpriteKind {
    export const Pila = SpriteKind.create()
    export const Sword = SpriteKind.create()
    export const Axe = SpriteKind.create()
    export const Dead = SpriteKind.create()
    export const deadBarbarian = SpriteKind.create()
    export const oracle = SpriteKind.create()
    export const coin = SpriteKind.create()
    export const hamer = SpriteKind.create()
    export const geweer = SpriteKind.create()
    export const schiet = SpriteKind.create()
    export const Stone = SpriteKind.create()
    export const boss = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.splash("WINNER!!!")
    current_level += 1
    startlevel()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (current_level == -1) {
    	
    } else {
        if (info.score() > 0) {
            if (AstroMo.vx < 0) {
                info.changeScoreBy(-1)
                projectile = sprites.createProjectileFromSprite(assets.image`Blaster_Fire_Left`, AstroMo, -200, 0)
            } else {
                info.changeScoreBy(-1)
                projectile = sprites.createProjectileFromSprite(assets.image`Blaster_Fire_Right`, AstroMo, 200, 0)
            }
        } else {
            AstroMo.sayText("Geen bommen meer!", 1000, true)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Stone, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (current_level == -1) {
    	
    } else {
        if (AstroMo.vy == 0) {
            AstroMo.vy = -185
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.schiet, function (sprite, otherSprite) {
    otherSprite.destroy()
    alien = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    alien,
    [img`
        .............777................
        ............77777...............
        ...........7777777..............
        ...........7ff7ff7..............
        ...........7ff7ff7..............
        ...........77f7f77..............
        ...........7777777..............
        ............77777...............
        .............777................
        .............676................
        ..........777767777.............
        ..........777777777.............
        ..........767777767.............
        .........77677777677............
        ........7767777777677...........
        ........7667777777667...........
        ........7677777777767...........
        ........7677777777767...........
        ........7677777777767...........
        ........7677776777767...........
        ........7677777777767...........
        ........76effffffff67...........
        ........76feeefffff67...........
        .......77.7ed177777.77..........
        ......776.7e1d16777.677.........
        ......76...761d167...67.........
        ...........76.1d17..............
        ...........76..1d1..............
        ...........76...1d1.............
        ...........76...61d1............
        ........777776.6771d1...........
        .......7777766.6677117..........
        `,img`
        .............777................
        ............77777...............
        ...........7777777..............
        ...........7ff7ff7..............
        ...........7ff7ff7..............
        ...........77f7f77..............
        ...........7777777..............
        ............77777...............
        .............777................
        .............676................
        ..........777767777.............
        ..........777777777.............
        ..........767777767.............
        .........77677777677............
        ........7767777777677...........
        ........7667777777667...........
        ........7677777777767...........
        ........7677777777767...........
        ........7677777777767...........
        ........7677776777767...........
        ....77..7677777777767..77.......
        ....677.76effffffff67.776.......
        .....67776feeefffff67776........
        ..........7ed177777.............
        ..........7e1d16777.............
        ...........761d167..............
        ...........76.1d17..............
        ...........76..1d1..............
        ...........76...1d1.............
        ...........76...61d1............
        ........777776.6771d1...........
        .......7777766.6677117..........
        `],
    500,
    true
    )
    alien.setPosition(AstroMo.x + 100, AstroMo.y + -25)
    alien.follow(AstroMo)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.hamer, function (sprite, otherSprite) {
    info.changeScoreBy(2)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.oracle, function (sprite, otherSprite) {
    if (current_level == 1) {
        game.showLongText("Mo: Hoe komt deze fles hier nu terecht?", DialogLayout.Bottom)
        game.showLongText("Fles: He, doe de fles open!", DialogLayout.Bottom)
        game.showLongText("Fles: Ik heb wat advies voor jou ...", DialogLayout.Bottom)
        game.showLongText("Fles: Om de aliens te verslaan, gooi met bommen op hen!", DialogLayout.Bottom)
        game.showLongText("Fles: Ik wens je nog veel succes!", DialogLayout.Bottom)
    }
    if (current_level == 2) {
        game.showLongText("Mo: Opnieuw de fles?", DialogLayout.Bottom)
        game.showLongText("Fles: Open mij opnieuw!", DialogLayout.Bottom)
        game.showLongText("Fles: De top van de maan is heel hoog ...", DialogLayout.Bottom)
        game.showLongText("Fles: Spring om naar boven te raken!", DialogLayout.Bottom)
        game.showLongText("Fles: Ik wens je nog veel succes!", DialogLayout.Bottom)
    }
    if (current_level == 3) {
        game.showLongText("Mo: Wat ligt er daar?", DialogLayout.Bottom)
        game.showLongText("Fles: Hier ben ik weer", DialogLayout.Bottom)
        game.showLongText("Fles: Let op voor de vuurballen en de aliens!", DialogLayout.Bottom)
        game.showLongText("Fles: Je bent er bijna!", DialogLayout.Bottom)
        game.showLongText("Fles: Ik wens je nog veel succes!", DialogLayout.Bottom)
    }
    otherSprite.destroy(effects.ashes, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
function startlevel () {
    scene.cameraFollowSprite(AstroMo)
    if (current_level == 0) {
        game.splash("Vind de vlag!")
        game.splash("Let op voor aliens!")
        game.splash("Verzamel het gereedschap!")
        tiles.setCurrentTilemap(tilemap`level0`)
    } else if (current_level == 1) {
        tiles.setCurrentTilemap(tilemap`level8`)
    } else if (current_level == 2) {
        tiles.setCurrentTilemap(tilemap`level9`)
    } else if (current_level == 3) {
        tiles.setCurrentTilemap(tilemap`level11`)
    }
    tiles.placeOnRandomTile(AstroMo, assets.tile`tile10`)
    for (let value of tiles.getTilesByType(assets.tile`tile10`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    info.setLife(5)
    for (let value2 of sprites.allOfKind(SpriteKind.Enemy)) {
        alien.destroy()
    }
    for (let value3 of sprites.allOfKind(SpriteKind.schiet)) {
        projectile.destroy()
    }
    for (let value4 of tiles.getTilesByType(assets.tile`tile7`)) {
        coin2 = sprites.create(img`
            . . . . . . . . . . . . 1 1 . . 
            . . . . . . . . . . . 1 d . . 1 
            . . . . . . . . . . . 1 d . 1 d 
            . . . . . . . . . . . 1 1 1 d d 
            . . . . . . . . . . 1 1 d d d . 
            . . . . . . . . . 1 1 d . . . . 
            . . . . . . . . 1 1 d . . . . . 
            . . . . . . . 1 1 d . . . . . . 
            . . . . . . 1 1 d . . . . . . . 
            . . . . . 1 1 d . . . . . . . . 
            . . . 1 1 d d . . . . . . . . . 
            . 1 1 1 d d . . . . . . . . . . 
            . 1 . . d . . . . . . . . . . . 
            . 1 1 . d . . . . . . . . . . . 
            . . d d d . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.coin)
        animation.runImageAnimation(
        coin2,
        [img`
            . . . . . . . . . . . . 1 1 . . 
            . . . . . . . . . . . 1 d . . 1 
            . . . . . . . . . . . 1 d . 1 d 
            . . . . . . . . . . . 1 1 1 d d 
            . . . . . . . . . . 1 1 d d d . 
            . . . . . . . . . 1 1 d . . . . 
            . . . . . . . . 1 1 d . . . . . 
            . . . . . . . 1 1 d . . . . . . 
            . . . . . . 1 1 d . . . . . . . 
            . . . . . 1 1 d . . . . . . . . 
            . . . 1 1 d d . . . . . . . . . 
            . 1 1 1 d d . . . . . . . . . . 
            . 1 . . d . . . . . . . . . . . 
            . 1 1 . d . . . . . . . . . . . 
            . . d d d . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . 1 . . 
            . . . . . . . . . . . . d . . 1 
            . . . . . . . . . . . . d . 1 d 
            . . . . . . . . . . . 1 1 1 d . 
            . . . . . . . . . . . 1 d d . . 
            . . . . . . . . . . 1 d . . . . 
            . . . . . . . . . 1 d . . . . . 
            . . . . . . . . 1 d . . . . . . 
            . . . . . . . 1 d . . . . . . . 
            . . . . . . 1 d . . . . . . . . 
            . . . . 1 d d . . . . . . . . . 
            . . . 1 d d . . . . . . . . . . 
            . . 1 . d . . . . . . . . . . . 
            . . 1 d . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 1 . . 
            . . . . . . . . . . . . 1 . d . 
            . . . . . . . . . . . . 1 d . . 
            . . . . . . . . . . . 1 d . . . 
            . . . . . . . . . . 1 d . . . . 
            . . . . . . . . . 1 d . . . . . 
            . . . . . . . . 1 d . . . . . . 
            . . . . . . . 1 d . . . . . . . 
            . . . . . . 1 d . . . . . . . . 
            . . . . . 1 d . . . . . . . . . 
            . . . . 1 d . . . . . . . . . . 
            . . . 1 d . . . . . . . . . . . 
            . . 1 1 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . d . . 
            . . . . . . . . . . . . d . 1 . 
            . . . . . . . . . . . . d 1 . . 
            . . . . . . . . . . . d 1 . . . 
            . . . . . . . . . . d 1 . . . . 
            . . . . . . . . . d 1 . . . . . 
            . . . . . . . . d 1 . . . . . . 
            . . . . . . . d 1 . . . . . . . 
            . . . . . . d 1 . . . . . . . . 
            . . . . . d 1 . . . . . . . . . 
            . . . . d 1 . . . . . . . . . . 
            . . . d 1 . . . . . . . . . . . 
            . . d d . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . d . . 
            . . . . . . . . . . . . 1 . . d 
            . . . . . . . . . . . . 1 . d 1 
            . . . . . . . . . . . d d d 1 . 
            . . . . . . . . . . . d 1 1 . . 
            . . . . . . . . . . d 1 . . . . 
            . . . . . . . . . d 1 . . . . . 
            . . . . . . . . d 1 . . . . . . 
            . . . . . . . d 1 . . . . . . . 
            . . . . . . d 1 . . . . . . . . 
            . . . . d d 1 . . . . . . . . . 
            . . . d 1 1 . . . . . . . . . . 
            . . d . 1 . . . . . . . . . . . 
            . . d 1 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . d d . . 
            . . . . . . . . . . . d 1 . . d 
            . . . . . . . . . . . d 1 . d 1 
            . . . . . . . . . . . d d d 1 1 
            . . . . . . . . . . d d 1 1 1 . 
            . . . . . . . . . d 1 1 . . . . 
            . . . . . . . . d 1 1 . . . . . 
            . . . . . . . d 1 1 . . . . . . 
            . . . . . . d 1 1 . . . . . . . 
            . . . . . d 1 1 . . . . . . . . 
            . . . d d 1 1 . . . . . . . . . 
            . d d d 1 1 . . . . . . . . . . 
            . d . . 1 . . . . . . . . . . . 
            . d d . 1 . . . . . . . . . . . 
            . . 1 1 1 . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(coin2, value4)
        tiles.setTileAt(value4, assets.tile`transparency16`)
    }
    for (let value5 of tiles.getTilesByType(assets.tile`tile9`)) {
        hamer2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . d d d d d d d e . . . . 
            . . . d d d d d d d d d e . . . 
            . . d d d d d d d d d d d e . . 
            . e e e e e e e e e e e e e e . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            . 7 7 4 7 7 7 4 7 7 4 7 7 4 7 . 
            . . 4 5 5 5 5 5 4 4 5 4 4 5 . . 
            . e e 5 e e e 5 e e e e e e e . 
            . e e e e e e e e e e e e e e . 
            . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 
            . d d d d d d d d d d d d e e . 
            . . e e e e e e e e e e e e . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.hamer)
        animation.runImageAnimation(
        hamer2,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . d d d d d d d e . . . . 
            . . . d d d d d d d d d e . . . 
            . . d d d d d d d d d d d e . . 
            . e e e e e e e e e e e e e e . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            . 7 7 4 7 7 7 4 7 7 4 7 7 4 7 . 
            . . 4 5 5 5 5 5 4 4 5 4 4 5 . . 
            . e e 5 e e e 5 e e e e e e e . 
            . e e e e e e e e e e e e e e . 
            . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 
            . d d d d d d d d d d d d e e . 
            . . e e e e e e e e e e e e . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . d d d d d e . . . . . 
            . . . . d d d d d d d e . . . . 
            . . . d d d d d d d d d e . . . 
            . . e e e e e e e e e e e e . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . 7 7 4 7 7 7 7 4 7 7 4 7 . . 
            . . . 4 5 5 5 5 4 5 4 4 5 . . . 
            . . e e 5 e e e e e e e e e . . 
            . . e e e e e e e e e e e e . . 
            . . 2 2 2 2 . 2 2 . 2 2 2 2 . . 
            . . d d d d d d d d d d e e . . 
            . . . e e e e e e e e e e . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . d . . . . . . . . 
            . . . . . . d d d e . . . . . . 
            . . . . . d d d d d e . . . . . 
            . . . . d d d d d d d e . . . . 
            . . . e e e e e e e e e e . . . 
            . . . 7 7 7 7 7 7 7 7 7 7 . . . 
            . . . 7 7 4 7 7 4 7 7 4 7 . . . 
            . . . . 4 5 5 5 5 4 4 5 . . . . 
            . . . e e 5 e e e e e e e . . . 
            . . . e e e e e e e e e e . . . 
            . . . 2 2 2 2 2 . 2 2 2 2 . . . 
            . . . d d d d d d d d e e . . . 
            . . . . e e e e e e e e . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . d . . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . d d d e . . . . . . 
            . . . . . d d d d d e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . . 7 7 7 7 7 7 7 7 . . . . 
            . . . . 7 7 4 7 4 7 4 7 . . . . 
            . . . . . 4 5 5 5 4 5 . . . . . 
            . . . . e e 5 e e e e e . . . . 
            . . . . e e e e e e e e . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . d d d d d d e e . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . d . . . . . . . . 
            . . . . . . . d . . . . . . . . 
            . . . . . . . d . . . . . . . . 
            . . . . . . . d e . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . . . 7 7 4 7 . . . . . . 
            . . . . . . . 4 5 . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . d d e e . . . . . . 
            . . . . . . . e e . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . d . . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . d d d e . . . . . . 
            . . . . . d d d d d e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . . 7 7 7 7 7 7 7 7 . . . . 
            . . . . 7 7 4 7 4 7 4 7 . . . . 
            . . . . . 4 5 5 5 4 5 . . . . . 
            . . . . e e 5 e e e e e . . . . 
            . . . . e e e e e e e e . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . d d d d d d e e . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . d . . . . . . . . 
            . . . . . . d d d e . . . . . . 
            . . . . . d d d d d e . . . . . 
            . . . . d d d d d d d e . . . . 
            . . . e e e e e e e e e e . . . 
            . . . 7 7 7 7 7 7 7 7 7 7 . . . 
            . . . 7 7 4 7 7 4 7 7 4 7 . . . 
            . . . . 4 5 5 5 5 4 4 5 . . . . 
            . . . e e 5 e e e e e e e . . . 
            . . . e e e e e e e e e e . . . 
            . . . 2 2 2 2 2 . 2 2 2 2 . . . 
            . . . d d d d d d d d e e . . . 
            . . . . e e e e e e e e . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . d d d d d e . . . . . 
            . . . . d d d d d d d e . . . . 
            . . . d d d d d d d d d e . . . 
            . . e e e e e e e e e e e e . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . 7 7 4 7 7 7 7 4 7 7 4 7 . . 
            . . . 4 5 5 5 5 4 5 4 4 5 . . . 
            . . e e 5 e e e e e e e e e . . 
            . . e e e e e e e e e e e e . . 
            . . 2 2 2 2 . 2 2 . 2 2 2 2 . . 
            . . d d d d d d d d d d e e . . 
            . . . e e e e e e e e e e . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . d d d d d d d e . . . . 
            . . . d d d d d d d d d e . . . 
            . . d d d d d d d d d d d e . . 
            . e e e e e e e e e e e e e e . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            . 7 7 4 7 7 7 4 7 7 4 7 7 4 7 . 
            . . 4 5 5 5 5 5 4 4 5 4 4 5 . . 
            . e e 5 e e e 5 e e e e e e e . 
            . e e e e e e e e e e e e e e . 
            . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 
            . d d d d d d d d d d d d e e . 
            . . e e e e e e e e e e e e . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(hamer2, value5)
        tiles.setTileAt(value5, assets.tile`transparency16`)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`tile8`)) {
        zwaard = sprites.create(img`
            . . . . . . . . . . . . . . e . 
            . . . . . . . . . . . . . e . . 
            . . . . . . . . . . e e e . . . 
            . . . . . . . . . . 1 d e . . . 
            . . . . . . . . . 1 d 1 e . . . 
            . . . . . . . . 1 d 1 . . . . . 
            . . . . . . . 1 d 1 . . . . . . 
            . . . . . . 1 d 1 . . . . . . . 
            . . . . . 1 d 1 . . . . . . . . 
            . . . . 1 d 1 . . . . . . . . . 
            . . . 1 d 1 . . . . . . . . . . 
            . . . 1 1 . . . . . . . . . . . 
            . . d d d . . . . . . . . . . . 
            . d d d d d . . . . . . . . . . 
            . d d d d d . . . . . . . . . . 
            d d d d d d . . . . . . . . . . 
            `, SpriteKind.schiet)
        tiles.placeOnTile(zwaard, value6)
        tiles.setTileAt(value6, assets.tile`transparency16`)
    }
    for (let value7 of tiles.getTilesByType(assets.tile`Donker`)) {
        orakel = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . 9 e e . 
            . . . . . . . . . . . 9 e e e . 
            . . . . . . . . 9 9 9 9 e e 9 . 
            . . . . . . . 9 9 1 d d 9 9 . . 
            . . . . . . 9 9 1 1 d d 9 9 . . 
            . . . . . 9 9 1 1 1 1 1 9 9 . . 
            . . . . 9 9 1 1 1 1 1 9 9 8 . . 
            . . . 9 9 1 1 1 1 1 9 9 8 . . . 
            . . 9 9 1 1 1 1 1 9 9 8 . . . . 
            . 9 9 1 1 1 1 1 9 9 8 . . . . . 
            . 8 9 9 1 1 1 9 9 8 . . . . . . 
            . . 8 8 9 1 9 9 8 . . . . . . . 
            . . . d d 9 9 8 . . . . . . . . 
            . d d d d d d . . . . . . . . . 
            d d d d d d d . . . . . . . . . 
            `, SpriteKind.oracle)
        tiles.placeOnTile(orakel, value7)
        tiles.setTileAt(value7, assets.tile`transparency16`)
    }
    for (let value8 of tiles.getTilesByType(assets.tile`myTile3`)) {
        Steen = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . d . . 
            . . . . . . . . . . . . . . . . 
            . . d . . d d d d d d e . . . . 
            . . . . d d d e e d d e e . . . 
            . . . . d d d e e f d d e e . . 
            . . . . . d d d f f d d d e . . 
            . . . . d d d d d d d d d e . . 
            . . . d d e f d d d d e e e . . 
            . . . d d e f d d d d e . . . . 
            . . . d d d f d d e f e . . . . 
            . . . . d d d d d f f e . . . . 
            . . . . . d d d d d f e . . . . 
            . . d . . d d d d e e . . . . . 
            . . . . . . e e e e . . . d . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Stone)
        tiles.placeOnTile(Steen, value8)
        tiles.setTileAt(value8, assets.tile`transparency16`)
        animation.runMovementAnimation(
        Steen,
        "c 0 -100 0 100 0 0",
        2000,
        true
        )
        Steen.startEffect(effects.blizzard)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`MaanRotsGrond`, function (sprite, location) {
    game.splash("BOEMMM!!!")
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    alien.destroy()
    if (AstroMo.y < otherSprite.y) {
        info.changeScoreBy(1)
    } else {
        info.changeLifeBy(-1)
    }
})
let Steen: Sprite = null
let orakel: Sprite = null
let zwaard: Sprite = null
let hamer2: Sprite = null
let coin2: Sprite = null
let alien: Sprite = null
let projectile: Sprite = null
let AstroMo: Sprite = null
let current_level = 0
current_level = -1
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb3eebee4eebeeeeeebb
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcdbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbebeeebbeb4beeeebe
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffcbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbe4eebeebebbbb44ee
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffffffffffffcbbbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbebeebe3ee4beebee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffcbebeebbbbee4eebee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffb3eeebbbbeebbe4ee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffcd4eebbbbbbeeebbb
    77777dd111d777d111111d777777d11d777777d1111d777d11d777d1177111771117777111777dd111d7777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffb3eeb4bbbbeebbbb
    7777d111111177d1111111d777771111777771111111d7711177771117d11d7d111d77d11d77d1111111777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffcd4eebbbeebeeb4b
    777d11d77d11d711177d1117777d11117777d11d7711177111777711d7d11d7d111177d11d7d11d77d11d77ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbeeebbeebebeeb
    777d11777d11d7111777111777711111d777d11d77ddddd11d777d11d7d11d7d1111d7d11d7111777d11d77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbebebbbebeeee4
    77d11d7777777d11d777111777d11d11d777d11dd77777d11d777d11d7d1177d1111d7d11dd11d777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3eeebbbeeebbe
    77d11d7777777d11d77d11d777111711d777711111d777d111111111d711177111d1171117d11d777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb3eeeeebe4bbe
    77d11d7777777d1111111d777d11d711177777d1111d7711111111117711d77111711d1117d11d7d1111d77fffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffcdebbeebbebbe
    77d11d7777777d111111d777711177d117777777d1117711177771117d11d7d11d7d1111d7d11d7d1111777fffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffcbebbee4ce4e
    77d11d77711171117d111777d11111111d7111777d11dd11d777d11d7d11d7d11d7d1111d7d11d777111777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbeebebefb3
    77d11d77d11d711177111d7d111111111d7d11d7d1117d11d777d11d7d11d7d11d771111d7d11d77d11d777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb3e44eecee
    777d111111d7d11d77d11d7d11d777d11d7d1111111d7d11d777d11d711177d11d77d111777d1111111d777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdee4eecc
    7777d111dd77d11d77d111d1117777d11177dd111dd77d11d777d11d711177111777d1117777d1111dd7777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdeebece
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdbeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcd34ec
    fffffffffffffffffffffffffffffffffffffffffffffcbd11dddbdddbddbbbbdddddd1dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdbe
    fffffffffffffffffffffffffffffffffffffffffffffc11dddddddddddbbdbbdddddd1cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc33
    ffffffffffffffffffffffffffffffffffffffffffffc11ddddddddddddbbdbbdddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77777777111d77777dd111dd7711111111117d11111dd77777d111dd777d111d7777d111d777d111dd777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    7777777d111d7777d1111111d71111111111711111111d77d1111111d77d111d777d111177d1111111d77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77777771111d7777111d7d11d7777d117777711d77d11d77111d7d11d771111d777d111177111d7d11d77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    777777d11111777d11d777ddd77771117777d11d77711d7d11d777111771111177d1111d7d11d77711177cffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    777777111d117777111d77777777711d7777d11d77d11d71117777d11dd11d1177d1d11d71117777d11d7cffdbfffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77777d11dd11d777d1111d777777d11d7777d11d77111dd11d77771117d11d117d11d11dd11d777711177cffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    777771117d11d7777dd1111d7777d11d777711111111d7d11d77771117d11d11dd1dd11dd11d777711177fcfffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    7777d11d7d11d7777777d11d7777d11d77771111111d77d11d777d11d7d117d1d11d1117d11d777d11d77fcfffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    777d11111111d7d11d77d11d77771117777d11d7d11d77d11d777d11d71117d111d71117d11d777d11d77cffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    777d1111111117d11177d11d77771117777d11d77111777111d7d11d771117d111dd11d77111d7d11d777cffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77d111777711177d1111111d777d11d7777d11d77d11d77d111111177d11d7d11d7d11d77d11111117777fcfffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77d11d7777d11d77d1111d77777d11d7777d11d77d11d777dd111d777d11d7d11d7d11d777dd111d77777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffff
    ffffffffffffffffffffffffffffffd1ddddbddddddbddddddbbbb1cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffb1ddddbddddddbddddddbbbbddfffffffffffffffffffffffffffcddddbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff11dddbbdddddbbddddddbbbb1cfffffffffffffffffffffffffc1111111dcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffcfffb1ddddbddddddbddddddbbbbddfffffffffffffffffffffffffb1dbdddddbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffbdfff11dddbddddddbdddddddbbbb1bffffffffffffffffffffffffb1dbb1dd11ddbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffccffb1ddddbddddddbddddddbbbbddffffffffffffffffffffffffc1ddbcdddbbbbfbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffbffffffffffffffff11dddbddddddbdddddddbbdb1bffffffffffffffffffffffffb1d1bfbdbbbbbccdcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffcd1dcfffffcbffffffc1dddbbdddddbdddddddbbbbddfffffffffffffffffffffffffddddbbbcfffccbbbdfffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffcffcdddbddbfffbd1dcffffd1dddbddddddbdddddddbbbb1bffffffffffffffffffffffffcbddbbcffffffffccbcfcdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffbddddddddbcddddddbffc1ddddbdddddddddddddbbbbddfffffffffffffffffffffffffcbddbffffffffffccccffdcffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffff
    ffffddddddddbbdbdddbdbdbfb1dddddbdddddddddbdbbbbb1cfffffffffffffffffffffffffbbbbfffffffffffcbfcfcdbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fccdddddddddbbdbbbdddbb1bb1dbddddbdddddddddbbbbbddffffffffffffffffffffffffffbbccffffffffffffbcffbdbfffffffffffffffffffffffffffffffffffffffffffffccffffffffffffff
    bdddbbdbbddddbbddcbdddbbcdddbddddbdddddddddbbbbb1cffffffffffffffffffffffffffdbcfffccffffffffbbffbddcffffffffffffffffffffffffffffffffffffffffffcbddbcffffffffffff
    ddddbddddbbddddbddbbdddbcdddbbddddbddddddddbbbbddffffffffffffffffffffffffffc1ddcffccfffffffffbcfc11cffffffffffffffffffffffffffffffffffffffffbdddddddbfffffffffff
    ddddddddddbbdddbbbddbbdbbdddbbdddddbddddddbbdbbdcfcffffffffffffffffffffffffcdbdcffcbffffffffc1cffb1bfccbdbffffffffffffffffffffffffffffffffcddddddddbdbffffffffff
    bbbddddddddbbbbdbbdddbbcdbddbbdddddddddddbbbbbdbfd1bfffffffffffffffffffffffcdbdcfffbbdcffffd1dccbcccb1dddddbcffffffffffcddbcffffffffffffcbdddddddddbbdbfffffffff
    bbbddddddddddbbbbdbdddbb1bdddbdddddddddddbbdbddcdddddffffffffffffffffffffffcddbbffffc11dbbd11bfcdccccbdddddddcfffffffcddddd1bffffffccfcb1dbdddddddddbddbffffffff
    bddddddddddddddbbbddddbd1bbddbbdddddddddbbdbbdbbddddddbffffffffffffffffffcddbddbffffd11111111bfcbbddcbdddbdbbdbcfffcddbbbdbbddcffffbddddbbbdddddddbddbdddcffffff
    ddddddbdddddddddddbddbb11bbddbcddddddddbbbbbdbcdddddbbddbfffffffffffffffb1dbddddccfd111111111cffc11bbbbdddbddbbbbbdddbbdddbbdddbbdddddbbbdddbbddbbbbdbbdddcfffff
    dddbbbbbddddddbddddbbcdbddddddbcddddddbbbbbddcbddbdddbbdddcffffffffffffb1ddbb1dbd1bd11111111bfffd1bbb1bbdbbbbbbbddbbbbddbddbbddddbddbbbdddddbbbddbbdbdbbdddcffff
    dddddddbbdddddbbddddbb1bdddddddbbdddddbbdbb1cbddddddddbbdddcffffffffffbddbdbbd1bb11111111111cffc1bb1bddbdbbbbdddddbbdddbbbddbddddbbbbdbbddddddbddbbddbdbddddcfff
    ddddddddbbddddddbdddbbdbdbbddddddddddbbbbbdbcdddddbddddbbbd1bfffffffbd1bddbcdbdbcd11111111dbfccc1bb1dddbddddddddbbbddddddbbdbbdddddbbddbdddbbddbbbbddbbdbbbbbbcc
    dddddddddbdbbbddbbddbcdbddbdddddddddbbbdbddcdddbddbbbddbbdbddbfffccddddbddbbb1bdccbdddddddbccbcc1db1bcbbddddddbbbbddddbddddddbbdddbddbbddbbbbddbbdbbdddbbbbbdddd
    dddddbddddddbbbdddddccdbbddddddddddbbbdbddbdddddddddbbbdbbdddddccd1ddbddbd1dcdbdbfcbbdddbbccbbcbddbbbcfbddbbbbbbddbddb7dddddbdbbdddbddbbbbdddbbddddbbbbbddddbbbd
    ddddbdddddddddddddbbbcbbdbbddddddddbbbdddbbdbdddddddddbbdbbddddddbbbbbddbb1cbbdddcfcbcccccdbbbbbdddddbcbdbbbbddddbbddbebdddbbbbbddddbbddddddbbdbbbdddbbdddddbddd
    dddddddddddddddddbbd1dbbdbb1ddddddbbddbcbbddddddddddbbdbbdbbdddddbbbbddbbbdccd1dbcfcbccccbcffbbbbbddddcbddddddddbddddbcbddbc77dbbbdddbddddbbbdbcbddbbdddddbbdddd
    ddddddddddddddbddbddddbdddcb1ddddbbdbbffbddbdddddddddbddbddbbdbbbddddddbb1bbcbdbbcccbbcffffffccbbdd1bccbbdddddbdddddddbbdbbbbddddbbddddddbbbdbbddddbbbddbbbddddd
    bddbbbdbddbbddbbdddbbdbbb1bffccbbbbdbbbdbdddbbddbbdddddddddddddddddddddddbcbdbccbccbfffffcbddcccbdddcccbbddddbbbbdddddbbbebdddddddbdddddbcbdddddddddbbbbbddddddd
    bbddddddddbdddddbcbdcdbbbddbfcccbdbddbbccdddddddbbdddbbdddbdddddbbbbbbdbdcbbbdbcbbcfffcbddd5bcccbbbcbdbcbddbbbdbddddbbb777cdddddddddbddddbbddddddddddbdddddbbddd
    dbcbdddddddddddddffdbbbb1ddd1ddbbdbbbccddddddbdddddbbddbbbbbdbbbbbbbbbbd1cddb1dcbfccbddd5bddbcbccbdb1ddbbdddddddbbbbdbc777ebdddddddddbddddddddddddddddbddbbbddbb
    ddbbbbdddbdddddddbfbdcdccbdddbbddbbbdccddddddbddddbbddddbbddddddddddddbddbbbb1dbcfcbd55bbbddccbffc1ccddbbddddddbbddbbcfc777eddbbbbbdddddddbbbbbbdddddddbbdddbbbb
    bbdbbcbddddddbdbcbcbbdbbcbdddddbbdddbcdddddddddddbdbbdbbbbbdddddddddddddd1bbddbbbfcbbd5dbbddccbffcbbcbdccdddddbbddbbbffc777bbdbbdbbdddbbbbbddddbbbbddddbbbbbbbdd
    bbbcbbbddddbbdcfcbcdbd11dbcfcccbcfcccdddddddddddbbdbbccdbbdddddddddddddcd1dbddbcbcbdbb5dddd1cfbffdd11bdbfbdddddbbbbb1bfcd77bbbbdddddddbbbbbddddddddbddbcbbdbbddd
    bdddddddddbbddffcbcb1bcb1dbcbdbddcbfcdbddbddddddbbdddddd1dddbdddddddddbb1bddd1cbbfbdbbddddbcfcccbbbdddbdccddbdddddbbb777d77bbdbddddddddddddddddddddddbbddddddddd
    dddddddddbb1cfcffbffccffbcccccbbbdbfbddbbbddbbdddbcbdbbcbbccdddddddddbb11dbddbcbcfcbbbbfffffccd1cdddbbbbbcddddddddddbbd7777bdddddbdddddddddddddbddddbbddbbbbdddd
    1dddddbdbddcfbbcfffffddfffffffffffffbcbbccbdddddddbbbcffccbbbddddddddbddbdddddddffcbbbbcffbbcd1dbb1dbbdbfcddddddddbbdbb7777bddddddddddddddddddddddbbdddddbbbbbdd
    cbdddbbdbdcfddcdbfffb1bfccfffffffffffffc1cfcdddddddddddddddddddddddddb1bbbdbbbbcffcdbbddbbcfcbdbdbbbdbdcfbdddddddddbdbb7777bddddddddddddddddddddddddbdddddddddbb
    bcbdddddddbbbffdccdcdbcb1bfcffb1dfffffffbbffcbbbdddbbddddbbddddddddddb1bc1dbcbcfffcbbddbbcc1dcbbbdbcdbccddddddbbbdddddb7777dddddddddddddddbbbddddddddddddddddddd
    11cb1dbdddddbbbcfcdbdcfccffccf1bcfffffffcbcbbbbbdbbbbcbbdddbddbddddddbd1ccdddbffffcbbdbbbcb11ccbdbcccccffcdddbbbbbbdddb7d7bdddddddddddddbbbbbbbbdddddbbddddddddd
    ddbfbddddddbbdddddbbdbcbcfffcfffffffffcddddddddddbbbcbbbddddddbdddbddbb11bbbbcccffcddbbdcbbbbcccbcbdbcffcccdddddbdddbddcccdbddddbbbbddddbcbbbbbbdddddddddddddddd
    ddbcbcbddddbbdddddbbddddddccccfffffffcbdddddddddddddddddbdddddddddddddcc11dbbbfbdbcccddbcd1bcdcfcccfccbbbbbdddddddddbbbbecb7bdddbbbddddddbbdbbddddddbbbbdddddddd
    ddbb11bdddddddddddddddddddddbbbbbbccccbbbbddbdddddddddbbdbdbbddbbddddddbbcbbccbbddbcffdfcdddbdcfffffbdddbdbbddddddddd7777777bddddddddddbddddddbbddbbbbdbbbdddddd
    ddbcd1dcddddddddddddddddddddddbdbdddbbdbbbddddddddbbbbddddbbddbbdbbbbd11dbccfcddbbdbbfffcbdbddfffcbbbddbccbbbddddddb77777777bdddddddbddbddbbbcbcbbbbbbbbbbbddddd
    ddbcdddcfbddddddddddddddddddddddddddbdbbbbdbbbbddbbddddbbd1dddddbbdbcd1dd1bbbbbbdbcdbbccdbcbdbffcddcbdddbfcdbdbddddb77d77777bddbbdbbbbd1dcbbbd1bcddbcbbdddbbdddd
    bdcfddbdcffcddddddddddbddddddddddddddddddbddbddbbbddddbdbbccdddddbb1bbbbddddbbcbbdccdbbbdddddcbbbdbcddbbddcbddbbbbbdb77e77e7bdddddbbdbdbcb1ddbbbbdddddddddbccddd
    b1cfddbc1cbcb1ddddbbbbbbdddddddddddddddbd1dbbbbbbdddbbddcfffb1dbd1ddcbbfd1dbbbccbdbcbbbbbdddccbbdbcd1bbbdcfbddddddddc77777ceddddddddddbcd1ddbbbbbddbbdddddbccfdd
    1dfbdddbb111ccdddbbdbddbbdddddddddddddddddcb1bbddddb1bffffcffb1dcbdfffddbd1bbdbfcbdccbdcbbddbbbbdcb1dbddbccddddddddbb777777cbddbbddddbb1dbddcb1bcdbcddbbd1dcbffd
    dffddddbbddd1cbdbbcb1cddddddddbddddddddbccb1ddbdddbb1ccbddddcfbbffffffbdbbdddcbbfcdbbbccbbbddbbdbcddbddbbccdddbddddbb777777eb1dbbdbbcb1bbdddcbddcccbdbbbcbdcbcfc
    ffcddddbcbddddbdbbfccffcfcbdddbbddddddbbcb1dddd1dffbcc1ddbdd1bfffffccffb1bddbbcbcfbdbbbcccbdbcbbcc1ddddddccddbdddddbb777777ebbddddbccbffddddbdd1cfcddbbdcfccffff
    ffcdddddcc1dbdbb1dddccffcbddddddddbdbbd1cbddddddcffffddddbbdd1cffbd11bff11ddbbdbbfcdbddcfcbbdcbbfb1dddddbfcdddddbbdcb777777eb7ffd1dddbcbbbdddddcfffbdddddcffffbd
    ffcdddddcc1dbbdcb1ddbbbddddddddddbdbbddddd1dddbfccffc1ddddbbd1bfc1bbddbfc1dddbbbdcfdbc1bfbbfffbcfddbddddccbb111d77ccd7777dcf77cffddddddbbbccddcfffcddddd1bffc11d
    ffcddddddcbbdd1bfbddbddddddddbbbbddddddd1dccfffb11dfcdddbdddd1bffddbddcbbd1dddbbddffbfbdffffffcfc1bbddbbcbcfccbbb77be77777ec7cbbffddbbbdddbcbbffffbdddddbffc11dd
    fffbdddd1cfcddd1bfb1dddddddbdbbbddbdddddcffccfb1ddddbbbdcbddddcffc11dcc1bb1ddbbdbbcfcffccfffffffcdbdddbbcbcfffcbdb7dce77efedfcd7ffc1bbdddddddbbbbbcbbcccccfd1bbd
    ffbbdddd1bfcdbddddcbdddddcbddddbbb1dddbcbbd1ffdddbbdddbbbd1dccccfffcfc1ddcbdddbdbbcfffffffffffffc1bbdbdbccffffcdbd7bcceccbb7bddefffc11ddbbdddddddddbcccbdbcddbdd
    ffcbb1dddbfc1bbddd1ccd1ddbbbcccccbbbbccd11dcfbddbb1cd11cfccffcbfffffb1dddfbdbdbbdbfffffffffbdbcfc1cbdd1cccffffc77bbcb1dddddbdd7effffcdddbbbddddddddddbbddbddddbd
    ddbbccbd1bfc1bbdddd1bcbd11dd1dbbbcccffcdd1dcb11dddcfcddffffffccffffd1dddbfb1bddbbbffffffffddd1bfbdcddddccfffffc7777cb1ddddbd7777cfcbccb1ddddddddddddddd1bb1ddbdd
    ddd1dbcfccfc1bbddddd1dbcccdbcb1dddbcfffcbbcfbcbdcffcccccccffffffffb1ddbbffb1bd1bbbffffffcd1bb1cfbbb1ddbfcffffff777dec1dbdbd7e777cfbdddfb1ddddbdddddddddbb11dbd1f
    dddddddbfffc1bbddbddbd1dbbffcfb1dddddddddbcfcffffcdd1dbd1dbcccccccddddbbbbbddb1dbbffffffd1ddd1cfcb1dd1cfcffffbb77e7dfcdbdb77777cfcddd1bfbdbdbbbccccbddbc11dddbcf
    dddccbbd1cffddbddbdddbd11dbd1dfb1dddddddddddddbcbd1dddddddddddd1ddddddddddbb1b1dbcfffffc1ddd1dffcd1b1bfccfffb1be777defcb1dbecffffb1ddd1bfddddbccbbddbcb11dddbfff
    dbcbddddd1cfcbcb1ddbddbbdbddd1dfb1dbbdddbbdbddd11dddddddddddddddbd1dbbdddddcd1dbbbfffffddbdddcffb1bb1ffcfffc1dddbb77ffcbddddcfcdfb1ddcb1cfd1ddddd1bcbb1dddddcffc
    dbb1ddddd1dfffffd1dbbddcddbddd1dfb1bbdddddddddbddddddddddddddddbdbbccddddddfc1dbbdcffffcbddddfffbdcddfccfffbddddddbbbbdbbdddd111cc1bbbcbcffd1ddddcb1dddddddbfffd
    ddddddd1dddbfffccd11d11cbdbdddd1dccd1ddddddddddddbbdddddbccbbbbddbcc1ddddddfc1bbbccffffcd1ddddffddc1bcfffffbddddddbbbddddbdddddddcb1d1bbbfffcd1dcc1ddccddddbffdd
    ddddddbbdddbbbcbcffcbcbfbdcc1dddd1bbbddddddddbbbdbbddddddbbbbbddd1dbbbddd1bffdd1dcbfffb1bbddd1cfdbd1bbccffcddbbddddddbbddbbddddbddcddddbdccdccbcb1dddcd11dbffbdd
    ddbbdddcfb1bb1dbbbcffffcd1bc1ddddddddbbbbd1d1ddddddddddddd1dbdddddbffd1bbbbffb1ddbbffcdddcddd1bfbcddbcccffcddddddbddddcbdddbdddbd1ccddddddfb1cf11dddddbcbbccbbdd
    bbbdddd1fc1dcbddd11dd11db1ddbbcd1dbd1dbbbbbbcd1ddddddddddddbddddddbffdbbbbdcfccccbbcfbdd1bfdd1bcdcffffffffc11db1bbdddddccd1ddddddbdccc11d1bfffd1ddd1cfccbbd1d1dc
    fcdddddddbd1ccdddddddbd1cb1dddbcb1bddcd1ddbbcfdddddddddddddd1ddbbcffffcddd1dbddccddcfdddd1ccddbb1dccccccfffcd1bccdddbbdbfb1dddbddbd1bccbbd1dfc1ddddcfbd1dddddbcf
    b1ddddddd1bdbfdddddddccbbcdddd1dcbddbbdddbd1dcc1ddddddddddbbbbbddcffffb1d1bbdbdbbbbbcdddd1cc1dcb1dbd1ddddcffc1cfcddddddbcfb1dbbdddddd1cfbdddcdddddcfd1ddddddbcff
    1ddddddddddbbfb1dddddbbbdbbdbddddbdbd1dddd1cfbcc1dbdddddddbbbbbdcfffffb11bcbdbbbdddccddd1dfc1dfb1ddddddbbdfffbcfcdbbdd1ccffdddbbdddbd1dbdd1fb1ddbccdddddddddbbff
    dddddddddd1bffb1dbddddddddbddcd1ddddbdddd1bffb1fc1ddddddddd1d1dbcbbcbfbddbbbbddbbbcccddddcfcddfbdbdddddcc1fffddffcbddd1bccfb1ddbb1dbbd1cb1fc1d1bfc1ddddddddddbff
    ddddddddddd1cff1dbddddddd1dfdbcbdddddbbd1bfbdbddfb1ddddddddddddd11111ddbbbbbbbcccccffcccffffffffcbb1dddbf1cfccffcfb1dd1bcffcddddcb1dbd1cfcb11dbfcdddddbddddddcff
    dddddddddd11cffc11111dddd1dfc1bbdddbb1111bfd1bbdbfb1ddddddbbdddddddddddbbbcbbbbbcfcfffcffbcccfcffcfb1bcffdffcfffffcbbbcfffcfb1d1ffd1dbbffb11dbfc1ddddbbddddddcff
    1dddddddd1bfffffcdbbdd1111cffb11dddbbdbcb11dddd11dfd1dddddddddddddddddddddddddd1dbbcfffcd11db11dbbffcccffcfffcbbddbffcffbbcffcccfffccfcb11ddddd1dddddbddddddbcff
    d1ddddddbcffffffffffffcddcffffcbddd1dfffffb11bbdcdbfb11dddbbbddddddbddbdbbdddddd11bbbbdd1ddd1ddddddbcfccfffffcbd11dbbcbddbbbbbbcfffffd111ddddddddbdddbddddddcfff
    fcccccffffffffffffffffffffffffffffccfcd1bffbdcffffcffcbdddbbbddddbbbddddddddddbddddddd1ddddbddbdddd11dddbccccd1dddd11dddddbbdddbccbb11dbdddddddddcdddbdddd1cffff
    fffffffffffffffffffffccfffffffffffffcbbd1bffffffcbcbbbbd1ddddddbbdddbdddddddbbbbbb1ddddddbbbbbbdddddd1dd1dbd1dddddddddddddddddd111cb1ddbb1bbddd1bfcc1dddd1cfffff
    ffffcccffffffffffffccd1dbbccfffffffccffffdcfccbbdddd1ddbbddddddbcbffffb1ddddcbbcbddddddbbbbdddddddddddddbccbdddddddbbcbdddddbddd1bb1dddbbdddddd1cfffc1ddbfffffff
    bbcb111bfffffffffcdddddd1ddddddbccfffffffffc111dddddddddddddddddbbcccfb11ddddbbbd1ddddddbdddddddddddddddbbdddddbdddbbcbdddbdbdddbb1ddddbbddddd1dfffffccfffffffff
    1111d11bffffffffb1bb1bcbdddddddd1d1dbfffffb1ddddbbddddddbbdddddddd11dddbbdddddd1dddddddddddddddbbddddddbd1dddddddddbb1dddddddd1bb1dddd1bb1dbdddfffffffffffffffff
    dddd11cffffcbbbb11bccfffdddddddbbdbdddccb11ddddddddddddddddddddddddddddbbddddddddbbbbbdddddddddddddddddddbbdddddddddddddddddd1bc1ddddddcd1bbdcffffffffffffffffff
    ddd1dffbbccdddd1dbddbccbdbbbbdd1ddddddd11ddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddbc1dbddd1bc11bccfffccffffffffffffff
    `)
pause(2000)
scene.setBackgroundColor(15)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
AstroMo = sprites.create(img`
    ...........11111111.............
    ..........d111111111............
    .........d11ffffff11............
    ........d11ffffffff11...........
    ........d11ffffff1f11...........
    ........d1dffffffff11...........
    ........d1dffffffff11...........
    ........d11ffffffff11...........
    ........d1dffffffff1............
    .........d11ffffff11............
    ..........ddddddd11d............
    ........dddd111111111...........
    .......d111111111111111.........
    .......d111111111821111.........
    ......d1111d1111111d111.........
    ......d111d1d7777111d111........
    .......d1111117777777711........
    .......d11111f677666111d........
    .......ddd116716611111d.........
    ........dddd11111111dd..........
    ..........d111111111............
    ..........dd11111111............
    ..........d1111111111...........
    ..........d11111d11111..........
    ..........d11111dd1111..........
    ..........d1111.dd1111..........
    ..........d1111..dd1111.........
    .........d11111...dd111.........
    .........d1111....dd111.........
    ........dd1111....d1111.........
    ........dd11111...d11111........
    ........ddd11111..dd11111.......
    `, SpriteKind.Player)
controller.moveSprite(AstroMo, 100, 0)
AstroMo.setBounceOnWall(false)
current_level = 0
startlevel()
game.onUpdate(function () {
    AstroMo.setImage(img`
        ...........11111111.............
        ..........d111111111............
        .........d11ffffff11............
        ........d11ffffffff11...........
        ........d11ffffff1f11...........
        ........d1dffffffff11...........
        ........d1dffffffff11...........
        ........d11ffffffff11...........
        ........d1dffffffff1............
        .........d11ffffff11............
        ..........ddddddd11d............
        ........dddd111111111...........
        .......d111111111111111.........
        .......d111111111821111.........
        ......d1111d1111111d111.........
        ......d111d1d7777111d111........
        .......d1111117777777711........
        .......d11111f677666111d........
        .......ddd116716611111d.........
        ........dddd11111111dd..........
        ..........d111111111............
        ..........dd11111111............
        ..........d1111111111...........
        ..........d11111d11111..........
        ..........d11111dd1111..........
        ..........d1111.dd1111..........
        ..........d1111..dd1111.........
        .........d11111...dd111.........
        .........d1111....dd111.........
        ........dd1111....d1111.........
        ........dd11111...d11111........
        ........ddd11111..dd11111.......
        `)
    if (AstroMo.vy < 0) {
        AstroMo.setImage(img`
            ...........11111111.............
            ..........d111111111............
            .........d11ffffff11............
            ........d11ffffffff11...........
            ........d11ffffff1f11...........
            ........d1dffffffff11...........
            ........d1dffffffff11...........
            ........d11ffffffff11...........
            ........d1dffffffff1............
            .........d11ffffff11............
            ..........ddddddd11d............
            ........dddd111111111...........
            .......d111111111111111.........
            .......d111111111821111.........
            ......d1111d1111111d111.........
            ......d111d1d7777111d111........
            .......d1111117777777711........
            .......d11111f677666111d........
            .......ddd116716611111d.........
            ........dddd11111111dd..........
            ..........d111111111............
            ..........dd11111111............
            ...dddddbbd1111111111...........
            ....dddddbd11111d11111..........
            ......dddbd11111dd1111..........
            ........dbd1111bdd1111..........
            ........dbd1111dbdd1111.........
            .........db1111.db1111..........
            ..........dd11...dd11...........
            ................................
            ................................
            ................................
            `)
    } else if (AstroMo.vy > 0) {
        AstroMo.setImage(img`
            ...........11111111.............
            ..........d111111111............
            .........d11ffffff11............
            ........d11ffffffff11...........
            ........d11ffffff1f11...........
            ........d1dffffffff11...........
            ........d1dffffffff11...........
            ........d11ffffffff11...........
            ........d1dffffffff1............
            .........d11ffffff11............
            ..........ddddddd11d............
            ........dddd111111111...........
            .......d111111111111111.........
            .......d111111111821111.........
            ......d1111d1111111d111.........
            ......d111d1d7777111d111........
            .......d1111117777777711........
            .......d11111f677666111d........
            .......ddd116716611111d.........
            ........dddd11111111dd..........
            ..........d111111111............
            ..........dd11111111............
            ...dddddbbd1111111111...........
            ....dddddbd11111d11111..........
            ......dddbd11111dd1111..........
            ........dbd1111bdd1111..........
            ........dbd1111dbdd1111.........
            .........db1111.db1111..........
            ..........dd11...dd11...........
            ................................
            ................................
            ................................
            `)
    } else if (AstroMo.x % 2 == 0) {
        AstroMo.setImage(img`
            ...........11111111.............
            ..........d111111111............
            .........d11ffffff11............
            ........d11ffffffff11...........
            ........d11ffffff1f11...........
            ........d1dffffffff11...........
            ........d1dffffffff11...........
            ........d11ffffffff11...........
            ........d1dffffffff1............
            .........d11ffffff11............
            ..........ddddddd11d............
            ........dddd111111111...........
            .......d111111111111111.........
            .......d111111111821111.........
            ......d1111d1111111d111.........
            ......d111d1d7777111d111........
            .......d1111117777777711........
            .......d11111f677666111d........
            .......ddd116716611111d.........
            ........dddd11111111dd..........
            ..........d111111111............
            ..........dd11111111............
            ...........d11111111............
            ...........d111d11111...........
            ...........d111dd1111...........
            ...........d111dd1111...........
            ...........d1111dd1111..........
            ..........d11111.dd111..........
            ..........d1111..dd111..........
            .........dd1111..d1111..........
            .........dd11111.d11111.........
            .........ddd11111dd11111........
            `)
    } else {
    	
    }
    if ((AstroMo.isHittingTile(CollisionDirection.Left) || AstroMo.isHittingTile(CollisionDirection.Right)) && AstroMo.vy >= 0) {
        AstroMo.vy = 0
        AstroMo.ay = 0
        AstroMo.setImage(img`
            ......................11111.....
            ....................1111111f....
            ...................1111111fff...
            ..................11111111f1f...
            ..................11111111fff...
            ..................d111111dffff..
            ..................d111111dffff..
            ..................d111111dfff...
            ..................dd11111dfff.11
            ...................d1111ddff.111
            ...................dd11111111111
            ..................1dd11111111111
            ..................11dd11........
            ..................11d111......dd
            .................111d111.....ddd
            .................111d111dddddddd
            .................111d1111ddddddd
            .................111d1111.......
            .................128d1111.......
            .................11dd111111.....
            ..................dd111111111...
            ..................11111111111...
            ..................111dd111111...
            ..................1ddddddd1111..
            ..................dddddddd1111..
            ....................dddddd111111
            .......................ddd111111
            .......................ddddddd..
            ..........................dddd..
            ..........................dddddd
            ..........................dddddd
            ................................
            `)
    } else {
        AstroMo.ay = 350
    }
    if (AstroMo.vx < 0 || AstroMo.isHittingTile(CollisionDirection.Left)) {
        AstroMo.image.flipX()
        AstroMo.setImage(AstroMo.image)
    }
})
