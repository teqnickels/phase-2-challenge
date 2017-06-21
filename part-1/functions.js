export default class Weekday {
  constructor( year, month, day ) {
    this.year = year;
    this.month = month
    this.day = day;
  }

  dayOfWeek(year, month, day) {
    var date = new Date(year, month, day)
    var day = date.getDay()
    return day
  }
}
