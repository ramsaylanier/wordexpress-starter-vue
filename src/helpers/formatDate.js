import moment from 'moment'

export default function (date) {
  return moment(date, 'ddd MMM D YYYY H:mm:ss').fromNow()
}
