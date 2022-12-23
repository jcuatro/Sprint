import * as moment from 'moment';

  let unix = moment.utc().unix();
  let MonthDayYear = moment.utc().format(('M-D-Y'));
  let DayMonthYear = moment.utc().format('D-M-Y');
  let esp = moment.utc().locale('es').format('dddd MMMM D');

  console.log(unix);
  console.log(MonthDayYear);
  console.log(DayMonthYear);
  console.log(esp);