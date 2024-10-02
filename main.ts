radio.onReceivedValue(function (name, value) {
    basic.showString(name)
    basic.showNumber(value)
})
basic.showIcon(IconNames.Square)
basic.forever(function () {
    radio.setGroup(119)
})
