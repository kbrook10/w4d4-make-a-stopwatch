// //Details of the Actions
//
// //Task Item (): Create a Buttom that counts up to display on the screen
// //<---------------------------------------------------------->
// /*
// Questions:
// ()What am i doing?
// ~ Creat variable to count
// ~ Create counter function to increment count
// ~ Record counter function to display on the page
// ~ Create listener event for click of button
// ~ Create function to change text on button
// ()How am i going to do it?
// ()Why am i going to do it this way?
// */
//
// //Create initial time variables for counting
// var _10thSecond = 0;
// var _second = '0'+ 0;
// var _minute = '0'+ 0;
// var watchTimer
// var startBtn = document.getElementById('startBtn');
// console.log(startBtn.innerHTML);
//
// //Create variable to change the current text in the 'watchTime'
// var startTime = document.getElementById('watchTime');
// console.log(startTime.innerHTML);
//
// //Create function to increment the counter (Increment) -> This increments the clock
// function start(){
//     _10thSecond++;
//     if (_10thSecond > 9) {
//         _10thSecond = 0;
//         _second++;
//         changeColor();
//     }
//     else if (_second > 59) {
//         _minute++;
//         _second = 0;
//     }
//     console.log(_10thSecond);
//     startTime.innerHTML = 'Time: ' + _minute + ':' +_second + ':' + _10thSecond; //--> This overrides the default number to start counting...
// };
//
// //Create function to increase 10th of a second (Timer Function) -> This starts the clock
// function countTimer(){
//     watchTimer = setInterval(start, (1/10) * 1000);
//     if (startBtn.innerHTML === 'Start' || startBtn.innerHTML === 'Continue' ) {
//         startBtn.innerHTML = 'Pause'
//         start()
//     }
//     else if (startBtn.innerHTML === 'Paused') {
//         startBtn.innerHTML = 'Continue'
//     }
// };
//
// // countTimer() --> Test to ensure the counter runs...
//
// //Create event listener for the 'startBtn' for click to start function
// document.getElementById('startBtn').addEventListener('click', countTimer);
//
// //<----------------------End of Task Item-------------------->
// //<---------------------------------------------------------->
//
// //Task Item (): Create Function for the Pause Button
// //<---------------------------------------------------------->
// /*
// Questions:
// ()What am i doing?
// ()How am i going to do it?
// ()Why am i going to do it this way?
// */
// //Create event listener for the 'startBtn' for click to start function
// document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
//
// function pauseTimer(){
//     clearInterval(watchTimer)
//     pauseTimeOut()
// }
//
// function pauseTimeOut(){
//     setInterval(pauseClearTime, 15 * 1000)
// }
// function pauseClearTime(){
//     clearInterval(watchTimer)
//     _10thSecond = '0'+ 0;
//     _second = '0'+ 0;
//     _minute = '0' + 0;
//     startTime.innerHTML = 'Time: ' + _minute + ':' +_second + ':' + _10thSecond;
// }
//
//
// //<----------------------End of Task Item-------------------->
// //<---------------------------------------------------------->
//
// //Task Item (): Create functions for the stop button
// //<---------------------------------------------------------->
// /*
// Questions:
// ()What am i doing?
// ()How am i going to do it?
// ()Why am i going to do it this way?
// */
// //Create event listener for the 'startBtn' for click to start function
// document.getElementById('pauseBtn').addEventListener('dblclick', pauseClearTime);
//
//
// //<----------------------End of Task Item-------------------->
// //<---------------------------------------------------------->
//
// //Task Item (): Create a function to change the background colors
// //<---------------------------------------------------------->
// /*
// Questions:
// ()What am i doing?
// ()How am i going to do it?
// ()Why am i going to do it this way?
// */
// function changeColor(){
//     var r = Math.floor(Math.random() * 256);
//     var g = Math.floor(Math.random() * 256);
//     var b = Math.floor(Math.random() * 256);
//     var a = Math.floor(Math.random() * 1);
//
//     var rgba = 'rgb('+ r + ','+  g + ',' + b + ')';
//     document.querySelector('.watchBody').style.backgroundColor = rgba;
//     document.querySelector('.watchBody').style.transition = 'all ' + 1 +'s' + 'ease'
// }
//
// //<----------------------End of Task Item-------------------->
// //<---------------------------------------------------------->
//
// //Task Item (): Change Clock Positions
// //<---------------------------------------------------------->
// /*
// Questions:
// ()What am i doing?
// ()How am i going to do it?
// ()Why am i going to do it this way?
// */
// // console.dir(document.querySelector('.watchBody'))
// function scroll(){
//     document.querySelector('.watchBody')
//     console.log(scroll)
// }


//<----------------------End of Task Item-------------------->
//<---------------------------------------------------------->


//<------------------------Original Code Above ---------------------->
//<------------------------Original Code Above ---------------------->

//Task Item (): Create function that starts timer after the click of the start button...
//<---------------------------------------------------------->
/*
Questions:
()What am i doing?
()How am i going to do it?
~ Create variables to use globally
~ Create Event listener
~ Create control flow function to gauge status of Start button
~ Create function to run function counter repeatedly every 1 sec.
~ Create counter function to increment by one.
()Why am i going to do it this way?
*/
//Global variables
var btnTitle = document.querySelector('#startBtn')
var timer;
var clearTime;
var i = 0;
var _10thSecond = 0;
var _second = 0;
var _minute = 0;
var timeTitle = document.querySelector('#timeTitle')
var _seconds;

//Create Event listener...
document.querySelector('#startBtn').addEventListener('click', btnStatus)

//Create Control Flow function to guage status of start button and starts the interval function to constantly repeat the count function...
function btnStatus(){
    clearInterval(timer)
    clearTimeout(clearTime)
    if (btnTitle.innerHTML === 'Start!' || btnTitle.innerHTML === 'Continue') {
        // alert('Congrats!');
        btnTitle.innerHTML = 'Pause';
        startInterval();
    }
    else if (btnTitle.innerHTML === 'Pause') {
        btnTitle.innerHTML = 'Continue';
        pauseTime();
    }
}
//Create function to start Interval to repeatedly run code function to count up for timer...
function startInterval(){
    timer = setInterval(incrementByOne, ((1/10) * 1000));
    // alert('Got to interval section!');
}
//Create function to start counting by increments of 1 and display in the
function incrementByOne(){
    _10thSecond++
    if (_10thSecond > 9) {
        _10thSecond = 0;
        _second++;
        changeColor();
    }
    else if(_second > 59) {
        _second = 0;
        _minute++;
    }
    // alert('Got to counting');
    _seconds = (_second >= 0 && _second < 10)  ? '0' + _second : _second;
    _minutes = (_minute >= 0 && _minute < 10)  ? '0' + _minute : _minute;
    timeTitle.innerHTML = 'Time: ' + _minutes + ' : ' + _seconds + ' : ' + _10thSecond;
    console.log(_seconds);
}

//<----------------------End of Task Item-------------------->
//<---------------------------------------------------------->

//Task Item (): Create functions for timer to react when paused
//<---------------------------------------------------------->
/*
Questions:
()What am i doing?
~ Create Pause function
~ Create Create timeout feature if pause is longer than 5 seconds
~ Create timer erase function if pause is greater than 5 seconds
()How am i going to do it?
~
()Why am i going to do it this way?
*/
//Create pause function...
function pauseTime(){
    clearInterval(timer);
    alert('We made it to the pause!');
    setTimeClear();
}
//Create function for Timeout delay to clear the timer...
function setTimeClear(){
    alert('We made it to the clearTime!');
    clearTime = setTimeout(eraseTime, (5 * 1000));
}
//Create function to clear out all of the time title information...
function eraseTime(){
    alert('We made it to the Erase Time')
    clearInterval(timer);
    clearTimeout(clearTime);
    timeTitle.innerHTML = 'Time: 00:00:00';
    _10thSecond = 0;
    _second = 0;
    _minute = 0;
    btnTitle.innerHTML = 'Start!';
}

//<----------------------End of Task Item-------------------->
//<---------------------------------------------------------->

//Task Item (): Create function for time value to wipe out when start button is double clicked...
//<---------------------------------------------------------->
/*
Questions:
()What am i doing?
~ create event listener for the double click...
~ create function to wipe out time value information...
()How am i going to do it?
~ reuse function created during pause assignment to immediately go to erase time...
()Why am i going to do it this way?
*/
//Create event listener for the double click...
document.querySelector('#startBtn').addEventListener('dblclick',eraseTime);




//<----------------------End of Task Item-------------------->
//<---------------------------------------------------------->

//Task Item (): Create a function to change the background colors
//<---------------------------------------------------------->
/*
Questions:
()What am i doing?
()How am i going to do it?
()Why am i going to do it this way?
*/
function changeColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var a = Math.floor(Math.random() * 1);

    var rgb = 'rgb('+ r + ','+  g + ',' + b + ')';
    document.querySelector('body').style.background = rgb;
}

//<----------------------End of Task Item-------------------->
//<---------------------------------------------------------->
