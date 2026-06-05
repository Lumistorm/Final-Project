/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Dat
 * Created on: Jun 2026
 * This program will run TARS robot.
*/

const SERVO_1 = robotbit.Servos.S1
const SERVO_2 = robotbit.Servos.S8

const SERVO_1_ZERO = 0
const SERVO_2_ZERO = 180

let degrees: number = 0

robotbit.Servo(SERVO_1, SERVO_1_ZERO)
robotbit.Servo(SERVO_2, SERVO_2_ZERO)

input.onButtonPressed(Button.A, function () {
    degrees = 180
    robotbit.Servo(SERVO_1, SERVO_1_ZERO + degrees)
    robotbit.Servo(SERVO_2, SERVO_2_ZERO - degrees)
})

input.onButtonPressed(Button.B, function () {
    degrees = 90
    robotbit.Servo(SERVO_1, SERVO_1_ZERO + degrees)
    robotbit.Servo(SERVO_2, SERVO_2_ZERO - degrees)
})
