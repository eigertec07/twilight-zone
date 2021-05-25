let play = false
input.onButtonPressed(Button.A, function () {
    play = true
})
input.onButtonPressed(Button.B, function () {
    play = false
})
basic.forever(function () {
    if (play) {
        music.playTone(831, music.beat(BeatFraction.Eighth))
        basic.showLeds(`
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        music.playTone(880, music.beat(BeatFraction.Eighth))
        basic.showLeds(`
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        music.playTone(831, music.beat(BeatFraction.Eighth))
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        music.playTone(659, music.beat(BeatFraction.Eighth))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . . . . .
            . . . . .
            `)
    }
})
