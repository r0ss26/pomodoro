HTMLElements = {
  pomodoro: document.getElementById('btn__pomodoro'),
  shortBreak: document.getElementById('btn__short-break'),
  longBreak: document.getElementById('btn__long-break'),
  timerElement: "timer"
}

timer = new Timer()
timer.sethtmlElement(HTMLElements.timerElement)

HTMLElements.pomodoro.addEventListener('click', () => {
  // new Timer(25*60*1000, "Pomodoro", HTMLElements.timerElement).startTimer()
  timer.duration = (25*60*1000)
  timer.type = "Pomodoro"
  timer.startTimer()
})

HTMLElements.shortBreak.addEventListener('click', () => {
  // new Timer(5*60*1000, "Short Break", HTMLElements.timerElement).startTimer()timer.duration = (25*60*1000)
  timer.duration = (5*60*1000)
  timer.type = "Short Break"
  timer.startTimer()
})

HTMLElements.longBreak.addEventListener('click', () => {
  // new Timer(15*60*1000, "Long Break", HTMLElements.timerElement).startTimer()
  timer.duration = (15*60*1000)
  timer.type = "Long Break"
  timer.startTimer()
})