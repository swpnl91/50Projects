function getTimeRemaining(endtime){
  const t = Date.parse(endtime) - Date.parse(new Date()); // get total difference in seconds
  const seconds = Math.floor((t / 1000) % 60); // convert total seconds to number of seconds by diving total seconds by number of seconds remaining after days,hours, and minutes are account for
  const minutes = Math.floor((t / 1000 /60) % 60); // convert total seconds to number of minutes by diving total seconds by number of minutes remaining after days and hours are account for
  const hours = Math.floor((t / (1000 * 60 *60)) % 24); // convert total seconds to number of hours by diving total seconds by number of hours remaining after days are accounted for
}