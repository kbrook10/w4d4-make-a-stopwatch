//Task Item (): Create Function to count, incrementing by 1
//<---------------------------------------------------------->
/*
Questions:
()What am i doing?
()How am i going to do it?
()Why am i going to do it this way?
*/
var i = 0;
var timeValue = document.querySelector('#timerContent')
var timer;
var btnStatus = document.querySelector('#action');
var timerTimeOut;

//Create function to increment count by 1;
function incrementByOne(){
    i++;
    console.log(i);
    timeValue.innerHTML = i;
}
//Create function to call counter repeatedly ever second.
function startInterval(){
    timer = setInterval(incrementByOne, (1 * 1000));
}
//Create function to determine status of button and call function to start counter if on action or paused.
function btnStatus(){
    clearInterval(timer);
    clearTimeOut(timerTimeOut)
    if (btnStatus === 'Action' || btnStatus === 'Continue'  ) {
        startInterval();
        btnStatus = 'Pause';
    }
    else if (btnStatus === 'Pause') {
        btnStaus = 'Continue';
        pauseTime();
    }
    alert('Made it here');
}

//Create function to identify button status based on button click.
document.querySelector("#action").addEventListener('click', btnStatus);



//<----------------------End of Task Item-------------------->
//<---------------------------------------------------------->

//Task Item (): Create function to conduct actions when timer is paused...
//<---------------------------------------------------------->
/*
Questions:
()What am i doing?
()How am i going to do it?
()Why am i going to do it this way?
*/
// Create function to clear current interval and call function to countdown delay to reset timer...
function pauseTime(){
    clearInterval(timer);
    setTimeClear();
}

//Use control flow from above to link function to set timer to clear out timer if greater than 15 seconds...
function setTimeClear(){
    timer = setTimeout(eraseTimer, (4 * 1000));
}
//Create function to erase all of the current timeValue information.
function eraseTimer(){
    clearInterval(timer);
    clearTimeout(timer);
    i = 0;
    timeValue.innerHTML = 'Add Timer Here';
}



//<----------------------End of Task Item-------------------->
//<---------------------------------------------------------->

//Task Item (): Clear out Time if button double Clicked
//<---------------------------------------------------------->
/*
Questions:
()What am i doing?
()How am i going to do it?
()Why am i going to do it this way?
*/
//Create Event Listener to clear out time setTimeout and setInterval when the button id double clicked...
// document.querySelector('#action').addEventListener('dblclick', eraseTimer)

//Create function to stop counter and clear setTimeout and setInterval



//<----------------------End of Task Item-------------------->
//<---------------------------------------------------------->
