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

// initialize arms
robotbit.Servo(SERVO_1, SERVO_1_ZERO)
robotbit.Servo(SERVO_2, SERVO_2_ZERO)

// initialize display
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.AB, function () {
    // set arms to 60 degrees upwards
    robotbit.Servo(SERVO_1, SERVO_1_ZERO + 60)
    robotbit.Servo(SERVO_2, SERVO_2_ZERO - 60)

    // wait 300 ms
    basic.pause(300)

    robotbit.Servo(SERVO_1, SERVO_1_ZERO)
    robotbit.Servo(SERVO_2, SERVO_2_ZERO)
})

input.onButtonPressed(Button.A, function () {
    // set arms to 60 degrees upwards
    robotbit.Servo(SERVO_1, SERVO_1_ZERO + 60)
    robotbit.Servo(SERVO_2, SERVO_2_ZERO - 60)

    // wait 300 ms
    basic.pause(300)

    robotbit.Servo(SERVO_1, SERVO_1_ZERO + 15)
    robotbit.Servo(SERVO_2, SERVO_2_ZERO - 80)

    // wait 300 ms
    basic.pause(300)

    robotbit.Servo(SERVO_1, SERVO_1_ZERO)
    robotbit.Servo(SERVO_2, SERVO_2_ZERO)
})

input.onButtonPressed(Button.B, function () {
    // set arms to 60 degrees upwards
    robotbit.Servo(SERVO_1, SERVO_1_ZERO + 60)
    robotbit.Servo(SERVO_2, SERVO_2_ZERO - 60)

    // wait 300 ms
    basic.pause(300)

    robotbit.Servo(SERVO_1, SERVO_1_ZERO + 80)
    robotbit.Servo(SERVO_2, SERVO_2_ZERO - 15)

    // wait 300 ms
    basic.pause(300)

    robotbit.Servo(SERVO_1, SERVO_1_ZERO)
    robotbit.Servo(SERVO_2, SERVO_2_ZERO)
})
