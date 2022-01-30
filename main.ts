basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        pins.analogWritePin(AnalogPin.P0, 50)
    } else {
        pins.analogWritePin(AnalogPin.P0, 0)
        if (input.buttonIsPressed(Button.B)) {
            pins.analogWritePin(AnalogPin.P1, 100)
        } else {
            pins.analogWritePin(AnalogPin.P1, 0)
        }
    }
})
