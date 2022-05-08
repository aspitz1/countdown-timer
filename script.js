// selecting form element
const form = document.querySelector('#timer-form');
// selecting p element
const output = document.querySelector('#countdown-display')
// start event upon submit
form.addEventListener('submit', function countdownTimer(event){
  event.preventDefault();
  // input fields in form
  const formInput = {
    hours: Number(event.target[0].value),
    minutes: Number(event.target[1].value),
    seconds: Number(event.target[2].value),
  };
  const formTotal = formInput.hours + formInput.minutes + formInput.seconds;
  // disable submit button if form doesn't equal 0
  if(formTotal !== 0){
    event.target[3].disabled = true;
  }
  // moment of submit in milliseconds
  const today = Date.parse(new Date());
  // converting form data into milliseconds
  const end = {
    hours: formInput.hours * (60 * 60 * 1000),
    minutes: formInput.minutes * (60 * 1000),
    seconds: formInput.seconds * 1000,
  };
  // adding time of submission and form data to get end time
  const total = today + end.hours + end.minutes + end.seconds;
  countdown();
  const timerInterval = setInterval(countdown, 1000);
  // countdown function
  function countdown() {
    // if the form was empty return nothing
    if(formTotal === 0) {
      return false;
    // if the end time becomes 0 stop the function
    } else if ((total - Date.parse(new Date()) === 0)) {
      clearInterval(timerInterval);
      output.innerText = '00 : 00 : 00';
      event.target[3].disabled = false;
    }
    // math to find how much time is left
    const timeLeft = total - Date.parse(new Date());
    // convert milliseconds to hours, minutes, seconds
    const countdown = {
      hours: Math.floor((timeLeft / (60 * 60 * 1000)) % 24),
      minutes: Math.floor((timeLeft / (60 * 1000)) % 60),
      seconds: Math.floor(timeLeft / 1000) % 60,
    };
    // conditions for adding a 0 for the time format to be 00:00:00
    countdown.hours =
    (countdown.hours < 10)? '0' + countdown.hours :countdown.hours;
    countdown.minutes =
    (countdown.minutes < 10)? '0' + countdown.minutes :countdown.minutes;
    countdown.seconds =
    (countdown.seconds < 10)? '0' + countdown.seconds :countdown.seconds;
    // countdown display in p element
    output.innerText =
    `${countdown.hours} : ${countdown.minutes} :${countdown.seconds}`
  }
  // reset the form
  form.addEventListener('reset', function(event){
    event.target[3].disabled = false
    output.innerText = '00 : 00 : 00';
    clearInterval(timerInterval);
  })
})
