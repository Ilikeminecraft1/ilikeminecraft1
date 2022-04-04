namespace SpriteKind {
    export const Player2 = SpriteKind.create()
}
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 2 2 2 2 2 2 2 f . . . . 
        . . . f 2 f f f f 2 2 f . . . . 
        . . . f f 9 9 9 9 f f f . . . . 
        . . . f 2 f f f f 2 2 f . . . . 
        . . . f 2 2 2 2 2 2 2 f . . . . 
        . . . f 2 2 2 2 2 2 2 f . . . . 
        . . . f 2 2 2 2 2 2 2 f . . . . 
        . . . f 2 2 2 2 2 2 2 f . . . . 
        . . . f 2 2 f f f 2 2 f . . . . 
        . . . f 2 2 f . f 2 2 f . . . . 
        . . . f 2 2 f . f 2 2 f . . . . 
        . . . f 2 2 f . f 2 2 f . . . . 
        . . . . f f . . . f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite.sayText("SUS")
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 2 2 2 2 2 2 2 f . . . . 
        . . . f 2 f f f f 2 2 f . . . . 
        . . . f f 9 9 9 9 f f f . . . . 
        . . . f 2 f f f f 2 2 f . . . . 
        . . . f 2 2 2 2 2 2 2 f . . . . 
        . . . f 2 2 2 2 2 2 2 f . . . . 
        . . . f 2 2 2 2 2 2 2 f . . . . 
        . . . f 2 2 2 2 2 2 2 f . . . . 
        . . . f 2 2 f f f 2 2 f . . . . 
        . . . f 2 2 f . f 2 2 f . . . . 
        . . . f 2 2 f . f 2 2 f . . . . 
        . . . f 2 2 f . f 2 2 f . . . . 
        . . . . f f . . . f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite.sayText("SUS", 1000, true)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    game.setDialogTextColor(1)
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . 1 . . 1 . . . 1 . 
        . . . . 1 . . 1 . . 1 . . 1 . . 
        . . . . . 1 . 1 . . 1 . . . 1 . 
        . . . . 1 . . . 1 1 . 1 . 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    game.showLongText("SUS", DialogLayout.Bottom)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    mySprite2 = sprites.create(img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f d 3 5 3 3 5 3 d f f . . 
        . . f d d f 3 5 5 3 f d d f . . 
        . . . f f 3 3 3 3 3 3 f f . . . 
        . . . f 3 3 5 3 3 5 3 3 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player2)
    controller.moveSprite(mySprite2, 100, 100)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
scene.setBackgroundColor(7)
controller.moveSprite(mySprite, 100, 100)
game.setDialogFrame(img`
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    1 . 1 1 1 1 1 1 1 1 1 1 1 . 1 
    1 1 . 1 1 1 1 1 1 1 1 1 . 1 1 
    1 1 1 . 1 1 1 1 1 1 1 . 1 1 1 
    1 1 1 1 . . f f f f . 1 1 1 1 
    1 1 1 1 . f 2 f f 2 f 1 1 1 1 
    1 1 1 1 . f f 9 9 f f 1 1 1 1 
    1 1 1 1 . f 2 f f 2 f 1 1 1 1 
    1 1 1 1 . . f . . f . 1 1 1 1 
    1 1 1 1 . . . . . . . 1 1 1 1 
    1 1 1 1 . . . . . . . 1 1 1 1 
    1 1 1 . 1 1 1 1 1 1 1 . 1 1 1 
    1 1 . 1 1 1 1 1 1 1 1 1 . 1 1 
    1 . 1 1 1 1 1 1 1 1 1 1 1 . 1 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    `)
