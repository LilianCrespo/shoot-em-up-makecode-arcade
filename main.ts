namespace SpriteKind {
    export const ennemisendomager = SpriteKind.create()
    export const enemisvraimentendomager = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    scaling.scaleToPixels(sprite, 20, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    sprite.setPosition(randint(7, 153), 0)
    sprite.follow(Avion_joueur, 15)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemisvraimentendomager, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    music.bigCrash.play()
    Avion_ennemis.startEffect(effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.ennemisendomager, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.setImage(img`
        . . . c c c . . . 
        . . . . c . . . . 
        . . . . c . . . . 
        c . c c c c . . c 
        . c c . c c c c . 
        . . . . c . . . . 
        . . . . 1 . . . . 
        `)
    otherSprite.setKind(SpriteKind.enemisvraimentendomager)
    music.smallCrash.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    while (controller.A.isPressed()) {
        music.knock.play()
        Minigun = sprites.createProjectileFromSprite(img`
            5 5 
            5 5 
            5 5 
            5 5 
            5 5 
            5 5 
            5 5 
            `, Avion_joueur, 0, -100)
        Minigun.z = -1
        scene.cameraShake(2, 50)
        pause(Cadence)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Musique = true
})
sprites.onDestroyed(SpriteKind.enemisvraimentendomager, function (sprite) {
    info.changeScoreBy(1)
    music.smallCrash.play()
    pause(randint(1200, 2000))
    Avion_ennemis = sprites.create(img`
        . . . c c c . . . 
        . . . . c . . . . 
        . . . . c . . . . 
        c c c c c c c c c 
        . c c c c c c c . 
        . . . . c . . . . 
        . . . . 1 . . . . 
        `, SpriteKind.Enemy)
    pause(randint(1200, 2000))
    Avion_ennemis = sprites.create(img`
        . . . c c c . . . 
        . . . . c . . . . 
        . . . . c . . . . 
        c c c c c c c c c 
        . c c c c c c c . 
        . . . . c . . . . 
        . . . . 1 . . . . 
        `, SpriteKind.Enemy)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ennemisendomager, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    music.bigCrash.play()
    Avion_ennemis.startEffect(effects.fire, 500)
})
info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemisvraimentendomager, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.setImage(img`
        . . . c c c . . . 
        . . . . c . . . . 
        . . . . c . . . . 
        c c c c c c . c c 
        . c c . c c c c . 
        . . . . c . . . . 
        . . . . 1 . . . . 
        `)
    otherSprite.setKind(SpriteKind.ennemisendomager)
    music.smallCrash.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
    music.bigCrash.play()
    Avion_ennemis.startEffect(effects.fire, 500)
})
let Minigun: Sprite = null
let Avion_ennemis: Sprite = null
let Musique = false
let Cadence = 0
let Avion_joueur: Sprite = null
Avion_joueur = sprites.create(img`
    . . . . 1 . . . . 
    . . . . 2 . . . . 
    . 2 2 2 2 2 2 2 . 
    2 2 2 2 2 2 2 2 2 
    . . . . 2 . . . . 
    . . . . 2 . . . . 
    . . . 2 2 2 . . . 
    `, SpriteKind.Player)
Avion_joueur.setPosition(75, 90)
scaling.scaleToPixels(Avion_joueur, 20, ScaleDirection.Uniformly, ScaleAnchor.Middle)
Avion_joueur.setStayInScreen(true)
controller.moveSprite(Avion_joueur, 80, 60)
Cadence = 350
scene.setBackgroundColor(9)
Musique = false
info.setScore(0)
info.setLife(3)
Avion_ennemis = sprites.create(img`
    . . . c c c . . . 
    . . . . c . . . . 
    . . . . c . . . . 
    c c c c c c c c c 
    . c c c c c c c . 
    . . . . c . . . . 
    . . . . 1 . . . . 
    `, SpriteKind.Enemy)
forever(function () {
    if (Musique == true) {
        while (Musique == true) {
            music.playMelody("E B C5 A B G A F ", 120)
            music.playMelody("E B C5 A B G A F ", 120)
            music.playMelody("C G G F G E E D ", 120)
            music.playMelody("C G G F G E E F ", 120)
        }
    }
})
