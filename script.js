let form = document.querySelector('#timer-form');

form.addEventListener('submit', function countdownTimer(event){
  event.preventDefault();

  const formInput = {
    hours: Number(event.target[0].value),
    minutes: Number(event.target[1].value),
    seconds: Number(event.target[2].value),
  };

  const today = Date.parse(new Date());

  const end = {
    hours: formInput.hours * (60 * 60 * 1000),
    minutes: formInput.minutes * (60 * 1000),
    seconds: formInput.seconds * 1000,
  };

  const total = today + end.hours + end.minutes + end.seconds;
  const timerInterval = setInterval(countdown, 1000);
  function countdown() {
    if ((total - Date.parse(new Date) === 0)) {
      clearInterval(timerInterval);
    }
    const timeLeft = total - Date.parse(new Date());
    const countdown = {
      hours: Math.floor((timeLeft / (60 * 60 * 1000)) % 24),
      minutes: Math.floor((timeLeft / (60 * 1000)) % 60),
      seconds: Math.floor(timeLeft / 1000) % 60,
    };
    countdown.hours =
    (countdown.hours < 10)? '0' + countdown.hours : countdown.hours;
    countdown.minutes =
    (countdown.minutes < 10)? '0' + countdown.minutes : countdown.minutes;
    countdown.seconds =
    (countdown.seconds < 10)? '0' + countdown.seconds : countdown.seconds;
    document.getElementById('countdown-display').innerText =
    `${countdown.hours} : ${countdown.minutes} : ${countdown.seconds}`
  }

})
