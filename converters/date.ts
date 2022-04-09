import cvt from './date'

export default {
    getYYYYMMDDFromDate(date: Date, delimiter = '/') {
        if (isNaN(date.getFullYear()) || isNaN(date.getMonth()) || isNaN(date.getDate())) return '-'
        const year = date.getFullYear().toString();
        const month = cvt.dateLeftPad(date.getMonth() + 1)
        const day = cvt.dateLeftPad(date.getDate())

        return [year, month, day].join(delimiter)
    },
    getYYYYMMDDHHMMFromDate(date: Date) {
        if (isNaN(date.getFullYear()) || isNaN(date.getMonth()) || isNaN(date.getDate())) return '-'

        const year = date.getFullYear().toString();
        const month = cvt.dateLeftPad(date.getMonth() + 1)
        const day = cvt.dateLeftPad(date.getDate())

        const hour = cvt.dateLeftPad(date.getHours())
        const minutes = cvt.dateLeftPad(date.getMinutes())
        return [year, month, day].join("-") + " / " + [hour, minutes].join(":")
    },
    getYYMMDDHHMMFromDate(date: Date) {
        if (isNaN(date.getFullYear()) || isNaN(date.getMonth()) || isNaN(date.getDate())) return '-'

        const year = date.getFullYear().toString().substr(-2);
        const month = cvt.dateLeftPad(date.getMonth() + 1)
        const day = cvt.dateLeftPad(date.getDate())

        const hour = cvt.dateLeftPad(date.getHours())
        const minutes = cvt.dateLeftPad(date.getMinutes())
        return [year, month, day].join("-") + " " + [hour, minutes].join(":")
    },
    getYYMMDDFromDate(date: Date, delimiter = '-') {
        if (isNaN(date.getFullYear()) || isNaN(date.getMonth()) || isNaN(date.getDate())) return '-'

        const year = date.getFullYear().toString().substr(-2);
        const month = cvt.dateLeftPad(date.getMonth() + 1)
        const day = cvt.dateLeftPad(date.getDate())

        return [year, month, day].join(delimiter)
    },
    getYYMMDDFromSeconds(sec: number, delimiter = '-') {
        if (sec === null || sec === undefined || sec === 0) return ''

        const date = cvt.getSecToDate(sec)

        const year = date.getFullYear().toString().substr(-2);
        const month = cvt.dateLeftPad(date.getMonth() + 1)
        const day = cvt.dateLeftPad(date.getDate())

        return [year, month, day].join(delimiter)
    },
    dateToStr(date: Date) {
        return date.getFullYear() + "-" +
            cvt.dateLeftPad(date.getMonth() + 1) + "-" +
            cvt.dateLeftPad(date.getDate()) + " " +
            cvt.dateLeftPad(date.getHours()) + ":" +
            cvt.dateLeftPad(date.getMinutes()) + ":" +
            cvt.dateLeftPad(date.getSeconds())
    },
    timestampStr() {
        const d = new Date()

        return cvt.dateToStr(d)
    },
    getSecToDate(sec: number) {
        return new Date(sec * 1000)
    },
    dateLeftPad(value: number | string): string {
        if (typeof value === 'string') value = +value

        if (value >= 10) {
            return value.toString();
        }

        return `0${value}`;
    },
    convertDateFormToServerForm(dateStr: string){
      const y = dateStr.substr(0, 4)
      const m = dateStr.substr(5, 2)
      const d = dateStr.substr(8, 2)
  
      const delimiter = "-"
      return [y, m, d].join(delimiter)
    },
}