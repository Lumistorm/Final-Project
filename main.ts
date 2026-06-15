/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Dat
 * Created on: Jun 2026
 * This program will run TARS robot.
*/

// define constants
const SERVO_1 = robotbit.Servos.S1
const SERVO_2 = robotbit.Servos.S8
const SERVO_1_ZERO = 0
const SERVO_2_ZERO = 180

// initialize variables
let degrees: number = 0

// initialize arms
robotbit.Servo(SERVO_1, SERVO_1_ZERO)
robotbit.Servo(SERVO_2, SERVO_2_ZERO)

// initialize display
basic.showIcon(IconNames.Happy)

input.buttonIsPressed(Button.AB):
    while (true) {
        // set arms to 60 degrees upwards
        degrees = 60
        robotbit.Servo(SERVO_1, SERVO_1_ZERO + degrees)
        robotbit.Servo(SERVO_2, SERVO_2_ZERO - degrees)

        // wait 500 ms
        basic.pause(500)

        // set arms to 0 degrees
        degrees = 0
        robotbit.Servo(SERVO_1, SERVO_1_ZERO + degrees)
        robotbit.Servo(SERVO_2, SERVO_2_ZERO - degrees)

        // wait 500 ms
        basic.pause(500)
    }

input.onButtonPressed(Button.A, function () {
    degrees = 60
    robotbit.Servo(SERVO_1, SERVO_1_ZERO + degrees)
    robotbit.Servo(SERVO_2, SERVO_2_ZERO - degrees)
})

input.onButtonPressed(Button.B, function () {
    degrees = 0
    robotbit.Servo(SERVO_1, SERVO_1_ZERO + degrees)
    robotbit.Servo(SERVO_2, SERVO_2_ZERO - degrees)
})
