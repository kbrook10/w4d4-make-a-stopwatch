//Details of the Actions

//Task Item (): Create a Buttom that counts up to display on the screen
//<---------------------------------------------------------->
/*
Questions:
()What am i doing?
~ Creat variable to count
~ Create counter function to increment count
~ Record counter function to display on the page
~ Create listener event for click of button
~ Create function to change text on button
()How am i going to do it?
()Why am i going to do it this way?
*/

//Create initial time variables for counting
var _10thSecond = 0;
var _second = '0'+ 0;
var _minute = '0'+ 0;
var watchTimer
var startBtn = document.getElementById('startBtn');
console.log(startBtn.innerHTML);

//Create variable to change the current text in the 'watchTime'
var startTime = document.getElementById('watchTime');
console.log(startTime.innerHTML);

//Create function to increment the counter (Increment) -> This increments the clock
function start(){
    _10thSecond++;
    if (_10thSecond > 9) {
        _10thSecond = 0;
        _second++;
        changeColor();
    }
    else if (_second > 59) {
        _minute++;
        _second = 0;
    }
    console.log(_10thSecond);
    startTime.innerHTML = 'Time: ' + _minute + ':' +_second + ':' + _10thSecond; //--> This overrides the default number to start counting...
};

//Create function to increase 10th of a second (Timer Function) -> This starts the clock
function countTimer(){
    watchTimer = setInterval(start, (1/10) * 1000);
    if (startBtn.innerHTML === 'Start' || startBtn.innerHTML === 'Continue' ) {
        startBtn.innerHTML = 'Pause'
        start()
    }
    else if (startBtn.innerHTML === 'Paused') {
        startBtn.innerHTML = 'Continue'
    }
};

// countTimer() --> Test to ensure the counter runs...

//Create event listener for the 'startBtn' for click to start function
document.getElementById('startBtn').addEventListener('click', countTimer);

//<----------------------End of Task Item-------------------->
//<---------------------------------------------------------->

//Task Item (): Create Function for the Pause Button
//<---------------------------------------------------------->
/*
Questions:
()What am i doing?
()How am i going to do it?
()Why am i going to do it this way?
*/
//Create event listener for the 'startBtn' for click to start function
document.getElementById('pauseBtn').addEventListener('click', pauseTimer);

function pauseTimer(){
    clearInterval(watchTimer)
    pauseTimeOut()
}

function pauseTimeOut(){
    setInterval(pauseClearTime, 15 * 1000)
}
function pauseClearTime(){
    clearInterval(watchTimer)
    _10thSecond = '0'+ 0;
    _second = '0'+ 0;
    _minute = '0' + 0;
    startTime.innerHTML = 'Time: ' + _minute + ':' +_second + ':' + _10thSecond;
}


//<----------------------End of Task Item-------------------->
//<---------------------------------------------------------->

//Task Item (): Create functions for the stop button
//<---------------------------------------------------------->
/*
Questions:
()What am i doing?
()How am i going to do it?
()Why am i going to do it this way?
*/
//Create event listener for the 'startBtn' for click to start function
document.getElementById('pauseBtn').addEventListener('dblclick', pauseClearTime);


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

    var rgba = 'rgb('+ r + ','+  g + ',' + b + ')';
    document.querySelector('.watchBody').style.backgroundColor = rgba;
    document.querySelector('.watchBody').style.transition = 'all ' + 1 +'s' + 'ease'
}

//<----------------------End of Task Item-------------------->
//<---------------------------------------------------------->

//Task Item (): Change Clock Positions
//<---------------------------------------------------------->
/*
Questions:
()What am i doing?
()How am i going to do it?
()Why am i going to do it this way?
*/
// console.dir(document.querySelector('.watchBody'))
function scroll(){
    document.querySelector('.watchBody')
    console.log(scroll)
}


//<----------------------End of Task Item-------------------->
//<---------------------------------------------------------->
