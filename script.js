let form = document.getElementById('timer-form');

// form.addEventListener('submit')

function getStartTime(){
  let formHours = Number(document.getElementById('hours').value);
  let formMinutes = Number(document.getElementById('minutes').value);
  let formSeconds = Number(document.getElementById('seconds').value);

  let startTime = new Date();
  let startYear = startTime.getFullYear();
  let startMonth = startTime.getMonth() + 1;
  let startDate = startTime.getDate();
  let startHours = startTime.getHours();
  let startMinutes = startTime.getMinutes();
  let startSeconds = startTime.getSeconds();

  let endHours = formHours + startHours;
  let endMinutes = formMinutes + startMinutes;
  let endSeconds = formSeconds + startSeconds;

  startDate = (endHours < 25)? startDate : startDate + 1;
  startDate = (startDate >= 10)? startDate : '0' + startDate;
  endHours = (endHours < 25)? endHours : endHours - 24;
  endHours = (endHours >= 10)? endHours : '0' + endHours;
  endHours = (endMinutes < 60)? endHours : endHours + 1;
  endMinutes = (endMinutes < 60)? endMinutes : endMinutes - 60;
  endMinutes = (endMinutes >= 10)? endMinutes : '0' + endMinutes;
  endMinutes = (endSeconds < 60)? endMinutes : endMinutes + 1;
  endSeconds = (endSeconds < 60)? endSeconds : endSeconds - 60;
  endSeconds = (endSeconds >= 10)? endSeconds : '0' + endSeconds;

  let endTime = `${startDate}/${startMonth}/${startYear} ${endHours}:${endMinutes}:${endSeconds}`
}

// let total = Date.parse(endTime) - Date.parse(startTime);
// console.log(startSeconds);
// console.log(endTime);
// console.log(total);
