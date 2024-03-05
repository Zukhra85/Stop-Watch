// let display = document.getElementById("display");
// let startBtn = document.getElementById("startBtn");
// let stopBtn = document.getElementById("stopBtn");

// let timer = null
// let startTime = 0
// let elapsedTime = 0
// let isRunning = false

// function start() {
//     if (!isRunning) {
//         startTime = Date.now() - elapsedTime
//         timer = setInterval(update, 10)
//         isRunning = true

//         startBtn.disabled = true
//         stopBtn.disabled = false
//         resetBtn.disabled = false
//     }


// }

// function stop() {
//     if (isRunning) {
//         clearInterval(timer)
//         elapsedTime = Date.now() - startTime
//         stopBtn.disabled = true
//         startBtn.disabled = false
//         isRunning = false
//     }
// }


// function reset() {
//     clearInterval(timer)
//     startTime = 0
//     elapsedTime = 0
//     isRunning - false
//     display.textContent = '00:00:00:00'

//     resetBtn.disabled = true
//     startBtn.disabled = false
//     stop.Btn.disabled = true

// }


// function update() {
//     let currentTime = Date.now()
//     elapsedTime = currentTime - startTime

//     let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
//     let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
//     let seconds = Math.floor((elapsedTime / 1000) % 60)
//     let milliseconds = Math.floor((elapsedTime % 1000) / 10)

//     hours = hours.toString().padStart(2, 0)
//     minutes = minutes.toString().padStart(2, 0)
//     seconds = seconds.toString().padStart(2, 0)


//     display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`

// }

// Module =An external file that contains re-usable code that can be
//                               imported into another
// Java script  files.
//                       Write re-usable code for many different apps
//                       Can contain variables,
// classes, functions, ...  and more
//                        introduced as part of 
// Ecma Script 2015 update
// import {PI , getCircumference, getArea,
// getVolume } from './MathUtils.js'

// import { PI } from './utils.js'
// console.log(PI)  // 3.14

// const circumference = getCircumference (10)
// console.log(circumference.toFixed(2)) // 62.80

// const area = getArea(10)
// console.log(area)  // 314

// const volume = getVolume(10)
// console.log(volume) // 1256  

// synchronous =         Executes line by Line consecutively an a sequential way 
//                       Code that waits for an operation to complete 

// asynchronous =                    Aloows multiple operations to be performed concurrently without waiting
//                                   Does not block the 
//                                  execution flow and allows the program to continue
//                                  (I/O operations,network requests, fetching data)
//                                  Handled with: Callbacks, Promise , Async/Await

// setTimeout( () => console.log('Task 1'), 3000 )
// console.log('Task 2')
// console.log('Task 3')
// onsole.log('Task 4')

// Error = An object thet is created to represent a problem that occurs
//                         Occur often with user input or establishing a connection

// console.log('Hello') // Error:console.lag is not function
// console.log('Program finished')

// In this cas we do not reach the end of a program,because program is interrupted
// before it reaches end by error
// Error can be generated for:
//                 Network errors
//                 Promise rejection
//                 Security errors

// But we can handle these errors with try, catch finally blocks

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any throw Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up ex. close file,close connections, release resources

// try {
//     console.lag('Hello') // Error: console.lag is not function
// }
// catch (error) {
//     console.log('An error occured:', error.message)
// }

// console.log('Program finished')

// let x = 25
// try {
//     console.log(x)
// }
// catch (error) {
//     console.log('An error occured:', error.message)

// }
// console.log('Program finished')


