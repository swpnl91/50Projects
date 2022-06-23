function getTimeRemaining(endtime){
  const t = Date.parse(endtime) - Date.parse(new Date()); // get total difference in seconds
  const seconds = Math.floor((t / 1000) % 60); // convert total seconds to number of seconds by diving total seconds by number of seconds remaining after days,hours, and minutes are account for
}