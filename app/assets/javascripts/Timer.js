class Timer {
  constructor(duration, type, htmlElement) {
    this.duration = duration
    this.type = type
    this.htmlElement = document.getElementById(htmlElement)
  }

  // Takes an HTML element to display the timer in
  displayTimer() {
    // Format and display the timer
   this.htmlElement.innerText = this.formatTime(this.duration);
  }

  // Start the count down
  startTimer() {
    this.start = new Date().getTime()

    // Calculate the elapsed time and update the UI every 1 second
    let countDown = setInterval(() => {

      let now, elapsed;
      now = new Date().getTime();
      elapsed = now - this.start; // milliseconds

      // Update the timer on the UI
      console.log(this.duration);
      console.log(elapsed);
      
      
      this.htmlElement.innerText = this.formatTime(this.duration - elapsed);

      // Display the timer in the document title
      document.title = `(${this.formatTime(this.duration - elapsed)}) Pomodoro Timer`;

      // When the countdown reaches zero, end the timer
      if (this.duration - elapsed <= 0) {
        clearInterval(countDown)
        this.endTimer();
      }
    }, 1000);
  }

  endTimer() {
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
    hours = addLeadingZeros(Math.floor(duration / (1000 * 60 * 60)));
    minutes = addLeadingZeros(Math.floor((duration / (1000 * 60)) % 60));
    seconds = addLeadingZeros(Math.round((duration / (1000)) % 60));

    // format the input
    hours > 0 ? formattedString =
      `${hours}:${minutes}:${seconds}` :
      formattedString = `${minutes}:${seconds}`;

    return formattedString;
  }
}