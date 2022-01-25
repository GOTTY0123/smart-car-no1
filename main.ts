basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    . . . . .
    . . . . .
    `)
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
pins.digitalWritePin(DigitalPin.P16, 0)
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
pins.digitalWritePin(DigitalPin.P16, 0)
basic.clearScreen()
