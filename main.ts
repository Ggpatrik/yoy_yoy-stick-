input.onButtonPressed(Button.A, function () {
    radio.sendNumber(666)
})
let yoystick_2_oosition = 0
let yoystick_1_position = 0
radio.setGroup(255)
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
basic.forever(function () {
    if (yoystick_1_position > 550) {
        radio.sendNumber(1024)
        basic.showArrow(ArrowNames.North)
    } else if (yoystick_1_position < 490) {
        radio.sendNumber(0)
        basic.showArrow(ArrowNames.South)
    } else if (yoystick_2_oosition > 530) {
        radio.sendNumber(530)
        basic.showArrow(ArrowNames.West)
    } else if (yoystick_2_oosition < 490) {
        radio.sendNumber(489)
        basic.showArrow(ArrowNames.East)
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        radio.sendNumber(594)
        basic.showLeds(`
            # . # . #
            . . . . .
            # . # . #
            . . . . .
            # . # . #
            `)
    }
})
basic.forever(function () {
    yoystick_2_oosition = pins.analogReadPin(AnalogReadWritePin.P2)
    yoystick_1_position = pins.analogReadPin(AnalogReadWritePin.P1)
})
