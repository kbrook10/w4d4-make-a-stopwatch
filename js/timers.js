//10.20.2016 Lesson -> Asynchronous and timers
//<--------------------------------------------->

//Test to see if everything is working...
// alert('It works!')

//Section 1: Timer used to delay loading of message
//<-------------------BEGIN OF SECTION-------------------------->

// var name = 'Christy'
//
// function runsLater(){
//     alert(name)
// }

// setTimeout(runsLater, 6000) //--> This 1000 = 1 sec...

// var firstTimeout = setTimeout(runsLater, 5000)
// console.log(firstTimeout)
//
// var secondTimeout = setTimeout(function(){  // ---> Alternate way to run timer delay
//     alert('This comes later.')
// }, 5000)
// console.log(secondTimeout)
//
// //To cancel out the Time out --> pass in the variable name into the clearTimeout method
// clearTimeout(firstTimeout)
// clearTimeout(secondTimeout)

//<-------------------END OF SECTION-------------------------->


//Section 2: Random Example of Button the changes button content at delayed time (Will use this in homework on 10.20.2016)
//<-------------------BEGIN OF SECTION-------------------------->
//Prevents the button from fighter with us as we click
// var actionTimer
// var counter = 0
//
// document.getElementById('action').addEventListener('click',function(){
//     // this.innerHTML = 'Go!'  //---> 'this' refers to the button being clicked
//     counter++
//     this.innerHTML = counter
//
//     clearTimeout(actionTimer)
//     actionTimer = setTimeout(() => {
//         // this.innerHTML = 'Action'
//         this.innerHTML = '0'
//         counter = 0
//         // console.log('happended once')
//     }, 2000)
// })
//<-------------------END OF SECTION-------------------------->


//Section 3: Setting Intervals to create basics of stop watch
//<-------------------BEGIN OF SECTION-------------------------->
var counter = 0
var timerContent = document.querySelector("#timerContent")

function doThis (){ //Increments
    counter++
    console.log(counter)
    timerContent.innerHTML = counter;
}

var timer   // --> Create variable as global to be able to reuse...

function start(){ // --> Create this function to reuse timer when pausing and restarting...
    timer = setInterval(doThis, 1000)
}

document.getElementById('action').addEventListener('click',function(){ // -->Create listener to conduct action when browser observes a click...
    clearInterval(timer) // --> Clears out the timer variable to wipe off the queue

    if (this.innerHTML === 'Paused'){ // --> Suggests if HTML says Paused run start function...
        start()
        this.innerHTML = 'Pause'
    }
    else{ // --> Suggests if HTML is not 'Paused' turn to paused...
        this.innerHTML = 'Paused'
    }
})
// start() // --> Call the function to start the code...
//<-------------------END OF SECTION-------------------------->

//Section 4: Animation Frame Loop
//<-------------------BEGIN OF SECTION-------------------------->
// var animationId
//
// function animationLoop(){ // --> This calls this 60x per second
//     var button = document.getElementById('action')
//     var top = Number(getComputedStyle(button).top.replace('px',''))
//
//     if (top >= 200) {
//         top = 0;
//     }
//     button.style.position = 'absolute'
//     button.style.top = top + 1 + 'px'
//     animationId = requestAnimationFrame(animationLoop) // --> IDs what frame we are on...'requestAnimationFrame' has default 60 frames per second
// }
// animationLoop()
//<-------------------END OF SECTION-------------------------->


//Section 5: Grow Circle
//<-------------------BEGIN OF SECTION-------------------------->
// var animationId
// function animationLoop(){ // --> This calls this 60x per second
//     var circle = document.querySelector('.box')
//     console.dir(circle)
//     var width = Number(getComputedStyle(circle).width.replace('px',''))
//     var height = Number(getComputedStyle(circle).height.replace('px', ''))
//
//     if (width >= 600 && height >= 600) {
//         width = 200;
//         height = 200;
//     }
//
//     circle.style.width = width + 1 + 'px'
//     circle.style.height = height + 1 + 'px'
//     animationId = requestAnimationFrame(animationLoop) // --> IDs what frame we are on...'requestAnimationFrame' has default 60 frames per second
// }
// animationLoop()

//Section 6: Asynchronous Reading exercises
//<-------------------BEGIN OF SECTION-------------------------->
// setTimeout(() => console.log('Wait For It...'), 5*1000)
// setTimeout(() => console.log('Turtle'), 10*1000)
// console.log('Rabbit')


//END OF LESSON
//<--------------------------------------------->
