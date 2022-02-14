export default function formatDate(date) {
    date.toString()
    let newDate = new Date(date)
    newDate = newDate.toString().substring(0, 21)
    const dayStr = newDate.substring(0, 3)
    let timeStr = newDate.substring(16, 22)
    let day = ''

    function tConvert (time) {
      // Check correct time format and split into components
      time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

      if (time.length > 1) { // If time format correct
        time = time.slice (1);  // Remove full string match value
        time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      return time.join(''); // return adjusted time or original string
    }
    
    switch (dayStr) {
      case 'Mon':
        day = 'Monday'
        break
      case 'Tue':
        day = 'Tuesday'
        break
      case 'Wed':
        day = 'Wednesday'
        break
      case 'Thu':
        day = 'Thursday'
        break
      case 'Fri':
        day = 'Friday'
        break
      case 'Sat':
        day = 'Saturday'
        break
      case 'Sun':
        day = 'Sunday'
        break

      default:
        break
    }

    const realDate = `${day}, ${newDate.substring(3, 10)}, 
    ${newDate.substring(10,15)}, ${tConvert(timeStr)}`

    return realDate
  }