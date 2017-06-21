export default class Funcs {
  constructor( year, month, day, str, maxLength ) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.str = str;
    this.num = num;
  }

  dayOfWeek( year, month, day ) {
    var date = new Date( year, month, day )
    var day = date.getDay()
    var dayName= [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ]
    return dayName[ day ]
  }

  snippet( str, maxLength ) {
    if( str.length > maxLength ) {
      var altStr = str.substring( 0, maxLength )
      var finalStr = altStr + '...'
      return finalStr
    }else{
      return str
    }
  }

  


}
