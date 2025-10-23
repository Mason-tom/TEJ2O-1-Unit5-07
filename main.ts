/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mason
 * Created on: Sep 2025
 * This program contols a servo
*/

// variables
const servoNumber1 = robotbit.Servos.S1

//setup
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {
    //move servo to 0 degrees 
    robotbit.Servo(servoNumber1, 0)
    basic.clearScreen()
    basic.showString('0')
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
    //move servo to 180 degrees 
    robotbit.Servo(servoNumber1, 180)
    basic.clearScreen()
    basic.showString('180a')
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
