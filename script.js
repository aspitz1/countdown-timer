let form = document.querySelector('#timer-form');
console.log(form);

form.addEventListener('submit', function getStartTime(event){
  event.preventDefault();
  console.log(event);
  let formHours = Number(event.target[0].value);
  let formMinutes = Number(event.target[1].value);
  let formSeconds = Number(event.target[2].value);

  // let startTime = new Date();
  // let startYear = startTime.getFullYear();
  // let startMonth = startTime.getMonth() + 1;
  // let startDate = startTime.getDate();
  // let startHours = startTime.getHours();
  // let startMinutes = startTime.getMinutes();
  // let startSeconds = startTime.getSeconds();

  // let endHours = formHours + startHours;
  // let endMinutes = formMinutes + startMinutes;
  // let endSeconds = formSeconds + startSeconds;

  // let months31Days = [1, 3, 5, 7, 8, 10, 12];
  // let months30Days = [4, 6, 9, 11];
  //
  // startDate = (endHours < 25)? startDate : startDate + 1;
  //   if ((startYear % 100 === 0) && (startYear % 400 === 0)) {
  //     startDate = (startDate > 29)? 1 : startDate;
  //     startMonth = (startDate > 29)? startMonth + 1 : startMonth;
  //   } else if (startYear % 4 === 0) {
  //     startDate = (startDate > 29)? 1 : startDate;
  //     startMonth = (startDate > 29)? startMonth + 1 : startMonth;
  //   } else if (startDate === 2) {
  //     startDate = startDate = (startDate <= 28)? startDate : 1;
  //     startMonth = (startDate > 28)? startMonth + 1 : startMonth;
  //   } else if (months31Days.includes(startDate)){
  //     startDate = startDate = (startDate <= 31)? startDate : 1;
  //     startMonth = (startDate > 31)? startMonth + 1 : startMonth;
  //   } else {
  //     startDate = startDate = (startDate > 30)? 1 : startDate;
  //     startMonth = (startDate > 30)? startMonth + 1 : startMonth;
  //   }
  // startMonth = (startMonth < 10)? '0' + startMonth : startMonth;
  // startDate = (startDate < 10)? '0' + startDate : startDate;
  // endHours = (endHours < 25)? endHours : endHours - 24;
  // endHours = (endHours < 10)? '0' + endHours : endHours;
  // endHours = (endMinutes < 60)? endHours : endHours + 1;
  // endMinutes = (endMinutes < 60)? endMinutes : endMinutes - 60;
  // endMinutes = (endMinutes < 10)? '0' + endMinutes : endMinutes;
  // endMinutes = (endSeconds < 60)? endMinutes : endMinutes + 1;
  // endSeconds = (endSeconds < 60)? endSeconds : endSeconds - 60;
  // endSeconds = (endSeconds < 10)? '0' + endSeconds : endSeconds;

  // let endTime = `${startDate}/${startMonth}/${startYear} ${endHours}:${endMinutes}:${endSeconds}`
  // console.log(endTime);

  // setInterval(function countDown() {
    // let total = Date.parse(endTime) - Date.parse(new Date());
  // }, 1000);
})
