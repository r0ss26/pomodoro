class Timer {
  constructor(duration, type, htmlElement) {
    this.duration = duration
    this.type = type
    this.htmlElement = document.getElementById(htmlElement)
    this.elapsed = 0
  }

  sethtmlElement(element) {
    this.htmlElement = document.getElementById(element)
  }

  displayTimer() {
    // Format and display the timer
   this.htmlElement.innerText = this.formatTime(this.duration);
  }

  // Start the count down
  startTimer() {
    if (this.countDown) {
      clearInterval(this.countDown)
    }

    this.start = new Date().getTime()
    this.displayTimer()

    // Calculate the elapsed time and update the UI every 1 second
    this.countDown = setInterval(() => {

      let now;
      now = new Date().getTime();
      this.elapsed = now - this.start; // milliseconds

      // Update the timer on the UI
      this.htmlElement.innerText = this.formatTime(this.duration - this.elapsed);
      setProgress(this.elapsed / this.duration * 100)
      

      // Display the timer in the document title
      document.title = `(${this.formatTime(this.duration - this.elapsed)}) Pomodoro Timer`;

      // When the countdown reaches zero, end the timer
      if (this.duration - this.elapsed <= 0) {
        clearInterval(this.countDown)
        this.endTimer();

        // Update logs
        Rails.ajax({
          type: 'post',
          url: "/",
          data: `timer_type=${timer.type}&duration=${timer.duration}`
        })
      }
    }, 1000);
  }

  endTimer() {
    clearInterval(this.countDown)
    this.htmlElement.innerText = '00:00';
    document.title = `(00:00) Pomodoro Timer`;
  }

  // Takes a number in milliseconds and formats as hh:mm:ss
  formatTime(duration) {
    let hours, minutes, seconds, formattedString;

    // Adds leading zeros to single digit and returns a string e.g. 1 -> '01'
    function addLeadingZeros(numberString) {
      return numberString < 10 ? '0' + numberString : numberString;
    }

    // Separate the input into hours and minutes
    hours = Math.floor(duration / (1000 * 60 * 60))
    minutes = Math.floor((duration / (1000 * 60)) % 60)
    seconds = Math.round((duration / (1000)) % 60)

    // Account for edge case
    if (seconds === 60) {
      seconds = 0
      minutes += 1
    }

    // Add leading digits
    hours = addLeadingZeros(hours)
    minutes = addLeadingZeros(minutes)
    seconds = addLeadingZeros(seconds)

    // Combine into a formatted string
    formattedString = hours > 0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;

    return formattedString;
  }
}