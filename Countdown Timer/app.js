function getTimeRemaining(endtime){
  const t = Date.parse(endtime) - Date.parse(new Date()); // get total difference in seconds
  const seconds = Math.floor((t / 1000) % 60); // convert total seconds to number of seconds by diving total seconds by number of seconds remaining after days,hours, and minutes are account for
  const minutes = Math.floor((t / 1000 /60) % 60); // convert total seconds to number of minutes by diving total seconds by number of minutes remaining after days and hours are account for
  const hours = Math.floor((t / (1000 * 60 *60)) % 24); // convert total seconds to number of hours by diving total seconds by number of hours remaining after days are accounted for
  const days = Math.floor(t / (1000 * 60 * 60 * 24)); // convert total seconds to number of days by dividing total seconds by number of days in seconds
  debugger;
    return {
        'total' : t,
        'days' : days,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
}

function initializeClock(id, endtime){
  const clock = document.getElementById(id); //first grab #clockdiv from div
  const daysSpan = clock.querySelector('.days'); // grab the days span tag from the #clockdiv's div
  const hoursSpan = clock.querySelector('.hours'); // grab the hours span tag from the #clockdiv's div
  const minutesSpan = clock.querySelector('.minutes'); // grab the minutes span tag from the #clockdiv's div
}