HTMLElements = {
  pomodoro: document.getElementById('btn__pomodoro'),
  shortBreak: document.getElementById('btn__short-break'),
  longBreak: document.getElementById('btn__long-break'),
  timerElement: "timer"
}

HTMLElements.pomodoro.addEventListener('click', () => {
  new Timer(25*60*1000, "Pomodoro", HTMLElements.timerElement).startTimer()
})

HTMLElements.shortBreak.addEventListener('click', () => {
  new Timer(5*60*1000, "Short Break", HTMLElements.timerElement).startTimer()
})

HTMLElements.longBreak.addEventListener('click', () => {
  new Timer(15*60*1000, "Long Break", HTMLElements.timerElement).startTimer()
})