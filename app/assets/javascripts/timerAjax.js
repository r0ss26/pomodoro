import axios from 'axios'

const Url = "/"

axios({
  method: 'post',
  url: Url,
  data: {
    timer_type: timer.type,
    duration: timer.duration 
  }
})