basic.forever(function () {
    basic.showLeds(`
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.playTone(831, music.beat(BeatFraction.Eighth))
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.playTone(880, music.beat(BeatFraction.Eighth))
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.playTone(831, music.beat(BeatFraction.Eighth))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        `)
    music.playTone(659, music.beat(BeatFraction.Eighth))
})
