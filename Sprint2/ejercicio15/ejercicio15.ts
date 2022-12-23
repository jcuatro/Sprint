import * as moment from 'moment';

let interval;
repeater();

function repeater() {
  interval = setInterval(clock, 15000);
  return interval;
}

function clock() {
  let date = moment.utc().format(('H:mm:ss'));
  console.log(date);
}
