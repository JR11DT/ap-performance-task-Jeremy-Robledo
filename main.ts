scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (JUMP) {
        mySprite.y += -50
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    JUMP = true
    if (mySprite.vy == 0) {
        mySprite.vy += -175
        JUMP = false
    }
})
function WALLHIT () {
    if (mySprite.isHittingTile(CollisionDirection.Right)) {
        info.changeLifeBy(-1)
        pause(100)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
    }
}
function Points (num: number) {
    POINTS_SPAWN = tiles.getTilesByType(assets.tile`myTile2`)
    for (let index = 0; index < num; index++) {
        POINTS = sprites.create(list._pickRandom(), SpriteKind.Food)
        tiles.placeOnTile(POINTS, POINTS_SPAWN.removeAt(randint(0, list.length - 1)))
        info.changeScoreBy(1)
        if (POINTS.image.equals(assets.image`myImage1`)) {
            info.changeScoreBy(1)
        }
        if (POINTS.image.equals(assets.image`myImage0`)) {
            info.changeScoreBy(2)
        }
        if (POINTS.image.equals(assets.image`myImage`)) {
            info.changeScoreBy(3)
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.field1, function (sprite, location) {
    game.gameOver(true)
})
function Spike2 () {
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        Spike = sprites.create(img`
            . . . . . . . f f f . . . . . . 
            . . . . . . . f 1 f . . . . . . 
            . . . . . . f f 1 f . . . . . . 
            . . . . . . f 1 1 f f . . . . . 
            . . . . . f f 1 1 f f . . . . . 
            . . . . . f f 1 1 1 f f . . . . 
            . . . . f f 1 1 1 1 f f . . . . 
            . . . . f f 1 1 1 1 1 f f . . . 
            . . . . f f 1 1 1 1 1 f f . . . 
            . . . f f 1 1 1 1 1 1 1 f . . . 
            . . . f f 1 1 1 1 1 1 1 f f . . 
            . . f f f 1 1 1 1 1 1 1 1 f . . 
            . . f f 1 1 1 1 1 1 1 1 1 f f . 
            . f f 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f f f f f f f f f f f f f f . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(Spike, value)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(100)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
})
let Spike: Sprite = null
let POINTS: Sprite = null
let POINTS_SPAWN: tiles.Location[] = []
let JUMP = false
let list: Image[] = []
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
info.setLife(3)
scene.setBackgroundImage(img`
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6e6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6e6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6e6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
    eeeeeeeeeee66eeeeeeeeeeeeeeeeeeeeeeee6e6eeeeeeeeeee66eeeeeeeeeeeeeeeeeeeeeeee6e6eeeeeeeeeee66eeeeeeeeeeeeeeeeeeeeeeee6e6eeeeeeeeeee66eeeeeeeeeeeeeeeeeeeeeeeeee6
    eeeeeeeeeee676eeeeeeeeeeeeeeeeeee66ee6e6eeeeeeeeeee676eeeeeeeeeeeeeeeeeee66ee6e6eeeeeeeeeee676eeeeeeeeeeeeeeeeeee66ee6e6eeeeeeeeeee676eeeeeeeeeeeeeeeeeee66eeee6
    eee6ee666eee6e6eeeee66eeeeeeee66e6e6e6e6eee6ee666eee6e6eeeeeeeeeeeeeee66e6e6e6e6eeeeee666eee6e6eeeeeeeeeeeeeee66e6e6e6e6eeeeee666eee6e6eeeee66eeeeeeee66e6e6eee6
    ee66eee676ee6ee6eee6e6e66eeee6e6e6e6e6e6ee66eee676ee6ee6eee6eeeeeeeee676e6e6e6e6eeeeeee676ee6ee6eee6eeeeeeeee676e6e6e6e6eeeeeee676ee6ee6eee6e6e66eeee676e6e6eee6
    6676eeee676ee6e6eee6e666e6ee6ee6e6ee66ee66e6eeee676ee6e6eee6eeee76ee6776e6ee66ee66eeeeee676eeee6eee6eeee76ee6776e6ee66ee66eeeeee676ee6e6eee6e66676ee6776e6eeeeee
    667666eee676e6ee6e6ee666ee6e6e66e66e66ee66e666eeee76e6ee6e6eeeee776e6766e66e66ee66eeeeeee676eeee6e6eeeee776e6766e66e66ee66eeeeeeee76e6ee6e6ee666776e6766e66eeeee
    6776e6eee677666e6e6e66666e66ee66666ee6ee6ee676eeee77666e6e6eeeeee7667766666ee6ee6eee7eeee677eeee6e6eeeeee7667766666ee6ee6eee7eeeee77666e6e6e666667667766666eeeee
    6766ee6ee666776e66ee66666ee6e666666ee6ee6e66776eeeee776e66eeeeeee7767666666ee6ee6eee776ee66677ee66eeeeeee7767666666ee6ee6eee776eeeee776e66ee666667767666666eeeee
    77666e6e6667766e66e6677666e6e6677666e6eeee66676eeee7766e66eee77eee7676677666e6eeeeeee76e66677eee66eee77eee7676677666e6eeeeeee76eeee7766e66e66776667676677666eeee
    77666ee66677666eeee6667766eee6776666eeeeee66677eee77666eeeeeee77ee7776776666eeeeeeeee7766677eeeeeeeeee77ee7776776666eeeeeeeee77eee77666eeee66677667776776666eeee
    766666e666776e6eeee6666766ee66766676eeeee666667eee776e6eeeeeeee7ee7766766676eeeeeeeeee766677eeeeeeeeeee7ee7766766676eeeeeeeeee7eee776e6eeee666676677667666e6eeee
    766766ee67766eeeee66776776ee677667766eeee6676677e7766eeeeeee77e77e77677667766eeeeee7ee77677eeeeeeeee77e77e77677667766eeeeee7ee77e7766eeeee66ee67767767766ee66eee
    766776ee67766eeeee67766676ee677667666eeee6677677e7766eeeeee77eee7e77677667666eeeeee77e77677eeeeeeee77eee7e77677667666eeeeee77e77e7766eeeee6ee666767767766e666eee
    766676ee67666eee6e6766667bee6776b7666eebe6667677e7666eee6ee7eeee7b776776b7666eebeeee7e7767eeeeee6ee7eeee7b776776b7666eebeeee7e77e7666eee6e6e66667b776776be666eee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbebbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbebbbbbbbbbb
    bbbeeeeebbbbbbbbbbbebbbeeeebbbbbbbbebbbbbbbeeeeebbbbbbbbbbbebbbeeeebbbbbbbbebbbbbbbeeeeebbbbbbbbbbbebbbeeeebbbbbbbbebbbbbbbeeeeebbbbbbbbbbbebbbeeeebbbbbbbbebbbb
    beeeebeeeebbbbeebbbbbeeeeeeeebbeebbbbbebbeeeebeeeebbbbeebbbbbeeeeeeeebbeebbbbbebbeeeebeeeebbbbeebbbbbeeeeeeeebbeebbbbbebbeeeebeeeebbbbeebbbbbeeeeeeeebbeebbbbbeb
    eeeeeeeeeeebbbeebbbbeebeeeeeeebeebbbbbbbeeeeeeeeeeebbbeebbbbeebeeeeeeebeebbbbbbbeeeeeeeeeeebbbeebbbbeebeeeeeeebeebbbbbbbeeeeeeeeeeebbbeebbbbeebeeeeeeebeebbbbbbb
    ebbeeeeeeeeebbbbbbbeeeeeeeeeeeebbbbbbbbeebbeeeeeeeeebbbbbbbeeeeeeeeeeeebbbbbbbbeebbeeeeeeeeebbbbbbbeeeeeeeeeeeebbbbbbbbeebbeeeeeeeeebbbbbbbeeeeeeeeeeeebbbbbbbbe
    ebbeeeeeeeeeeebbbeeeeeeeeeebbeeeebbbbeeeebbeeeeeeeeeeebbbeeeeeeeeeebbeeeebbbbeeeebbeeeeeeeeeeebbbeeeeeeeeeebbeeeebbbbeeeebbeeeeeeeeeeebbbeeeeeeeeeebbeeeebbbbeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbeeeeeeeeeee
    eeeeeeeeeebbeeeeeebbeeeeeeeeeeebeeeeeebeeeeeeeeeeebbeeeeeebbeeeeeeeeeeebeeeeeebeeeeeeeeeeebbeeeeeebbeeeeeeeeeeebeeeeeebeeeeeeeeeeebbeeeeeebbeeeeeeeeeeebeeeeeebe
    eeeeeeeeeebbeeeeeebbeeeeeeeeeeeeeebbeeeeeeeeeeeeeebbeeeeeebbeeeeeeeeeeeeeebbeeeeeeeeeeeeeebbeeeeeebbeeeeeeeeeeeeeebbeeeeeeeeeeeeeebbeeeeeebbeeeeeeeeeeeeeebbeeee
    eeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeebbeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeefdbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeee
    eeeeeeeeffbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdbfeeeeeeeeeeeeeeeeeeee
    eeeeeeeefddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbddfeeeeeeeeeeeeeeeeeeee
    eeeeeeeefbdddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddffeeeeeeeeeeeeeeeeeee
    eeeeeeeeffffbdffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddbffeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeffddfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffddffeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeffbdddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddffeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeffddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddffeeeeeeeeeeeeeee
    eeeeeeeeeeeeeefddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffdbffffeeeeeeeeeeee
    eeeeeeeeeeeeeefbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffdddbfeeeeeeeeeeee
    eeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddfeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbffeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdfeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffddddddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeefffddddddddddddffddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeffddddddddffffdddffdddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeffdddfffddfffffdddddddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeffdddfffffdffffddddddbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeffdddffffffddddddddbfdfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeefddddfffffdddddddfdffdfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeefdddddfffddddfffdffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeefdddddddddffffefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeffdddbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefffffbddddbbffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefdffefdddddddddffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefddfffddddddddddffddddfdfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefffbbdfffdddddddddddddddbdbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeefffddfffffeffddddddddddddddddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeefdbbdddfbfeeffffddddddffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeefddbbfffdfeeeeeffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeffffdddfefdffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeefbbfffffffddffeeeeffffeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeffbbbfffdbdddffffefddbfffffbdddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeefffffdfdbbdddddfefdddddddbbbbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeffbbbfdbddbbbffffefffffdddbddbfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeefbbfffdbbdddffffffeeeeffffbbbdfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeefffffbddbbdddddddfeeeeeeeffdbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeefbbfdbbddbbfffffffeeeeeeffddfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeefbffdbbbdddddddfeeeeeeeefddffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbdddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeffffdddbbfffffffeeeeeeeeffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeffdffdddfeeeeeeeeeeeeeeeeeeffdffdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeffddffffffeeeeeeeeeeeeeeeeeefddffdffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeefddbffffeeeeeeeeeefffffffeeffddffdbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffbdffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeffbbfddfeeeeeeeeeefddbbdffefddfffddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eefeeeeeeeeefdddbbffeeeeeeeeffddbdddfefdffffbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeefddddfeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeefefffbbddfeeeeeeeefddfffddfffffeffbffeeefeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeefeffbddfeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeee
    eeefffffeeeeeefdddbffeeffffffddfeffddfffeefdbfffeeeeeeeeeeefeeeffffeeeeeeeefeeeeeeefffffeeeeeefdbfefeeeffffeeeeeeeefeeeeeeefffffeeeeefffffefeeeffffeeeeeeeefeeee
    effffeffffeeeefdfbbdfffffffbddfffeffdffeeffddfffffeeeeffeeeeeffffffffeeffeeeeefeeffffeffffeeeeffffeeeffffffffeeffeeeeefeeffffeffffeeefbdbfeeeffffffffeeffeeeeefe
    fffffffffffeeefffbdbffddddffbdfffeefffeefffbdffffffeeeffeeeeffefffffffeffeeeeeeefffffffffffeeeffeeeeffefffffffeffeeeeeeeffffffffffffffdddfeeffefffffffeffeeeeeee
    feefffffffffeeeefddffbdffddfbbfeeeeeeeefffdbbfffffffeeeeeeeffffffffffffeeeeeeeeffeefffffffffeeeeeeeffffffffffffeeeeeeeeffeefffffffffbdddbffffffffffffffeeeeeeeef
    feefffffffffffeefffffddfffdefffffeeeeffffbddffffffffffeeeffffffffffeeffffeeeeffffeefffffffffffeeeffffffffffeeffffeeeeffffeefffffffffddddddbffffffffeeffffeeeefff
    fffffffffffffffffffffdddffdddfffffffffffdbbdfffffffffffffffffffbdbfeeffffffffffffffffffffffffffffffffffffffeefffffffffffffffffffffffbddbddddbfffffffefffffffffff
    ffffffffffeeffffffeefffddddddffffffffdbddfffffffffeeffffffeefffdddfffffeffffffefffffffffffeeffffffeefffffffffffeffffffefffffffffffeffffffbddddbbddbffffeffffffef
    ffffffffffeeffffffeefffddddddfffddbbddbdffffffffffeeffffffeefffbdddbffffffeeffffffffffffffeeffffffeeffffffffffffffeeffffffffffffffeefffffffbdddddddfffffffeeffff
    ffffffffffffffefffffffffdddddffddfbddfffffffffffffffffeffffffbddddddffffffeeffffffffffffffffffefffffffffffffffffffeeffffffffffffffffffefffffffdddddfffffffeeffff
    fffffffffffffffffffffffffdddfffffffffffffffffffffffffffffffbddddbddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddbffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffbddbbddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddfffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffdddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
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
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
mySprite.ay = 500
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
list = [assets.image`myImage`, assets.image`myImage0`, assets.image`myImage1`]
animation.runImageAnimation(
mySprite,
[img`
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
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . . f e 4 1 f d d f 1 4 e f . . 
    . . . f e 4 d d d d 4 e f e . . 
    . . f e f 2 2 2 2 e d d 4 e . . 
    . . e 4 f 2 2 2 2 e d d e . . . 
    . . . . f 4 4 5 5 f e e . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f . . . . . . . . . 
    `,img`
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
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f e e 2 2 2 2 2 2 e f f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . . f e 4 1 f d d f 1 4 e f . . 
    . . e f e 4 d d d d 4 e f . . . 
    . . e 4 d d e 2 2 2 2 f e f . . 
    . . . e d d e 2 2 2 2 f 4 e . . 
    . . . . e e f 5 5 4 4 f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . . . . f f f . . . . 
    `],
500,
true
)
Spike2()
Points(5)
if (info.life() < 0) {
    game.gameOver(false)
}
info.setScore(0)
forever(function () {
    mySprite.x += 1.25
    WALLHIT()
})
