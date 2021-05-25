input.onButtonPressed(Button.A, function () {
    play = true
})
input.onButtonPressed(Button.B, function () {
    play = false
    beat = 0
})
let play = false
let beat = 0
beat = 0
basic.forever(function () {
    if (play) {
        music.playTone(831, beat)
        basic.showLeds(`
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        music.playTone(880, beat)
        basic.showLeds(`
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        music.playTone(831, beat)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        music.playTone(659, beat)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . . . . .
            . . . . .
            `)
    }
})
