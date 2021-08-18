export function getCascaderValue(data, queryName, value, resultName) {
  for (const i in data) {
    const item = data[i]
    if (item[queryName] === value) {
      return [item[resultName]]
    } else if (item.children) {
      const result = getCascaderValue(
        item.children,
        queryName,
        value,
        resultName
      )
      if (result && result.length > 0) {
        result.unshift(item[resultName])
        return result
      }
    }
  }
  return []
}

export function setCascaderValue(data, queryName, value, resultName) {
  var cascaderId = getCascaderValue(data, queryName, value, resultName)
  return cascaderId
}

// 获取本周第一天
export function showWeekFirstDay() {
  var Nowdate = new Date()
  var WeekFirstDay = new Date(Nowdate - (Nowdate.getDay() - 1) * 86400000)
  var M = Number(WeekFirstDay.getMonth()) + 1
  var D = WeekFirstDay.getDate()
  M = M > 9 ? M : "0" + M
  D = D > 9 ? D : "0" + D
  return Nowdate.getFullYear() + "-" + M + "-" + D
}

// 获取本周最后一天
export function showWeekLastDay() {
  var Nowdate = new Date()
  var WeekFirstDay = new Date(Nowdate - (Nowdate.getDay() - 1) * 86400000)
  var WeekLastDay = new Date((WeekFirstDay / 1000 + 6 * 86400) * 1000)
  var M = Number(WeekLastDay.getMonth()) + 1
  var D = WeekLastDay.getDate()
  M = M > 9 ? M : "0" + M
  D = D > 9 ? D : "0" + D
  return Nowdate.getFullYear() + "-" + M + "-" + D
}

// 获取本月第一天
export function showMonthFirstDay() {
  var Nowdate = new Date()
  var MonthFirstDay = new Date(Nowdate.getYear(), Nowdate.getMonth(), 1)
  var M = Number(MonthFirstDay.getMonth()) + 1
  var D = MonthFirstDay.getDate()
  M = M > 9 ? M : "0" + M
  D = D > 9 ? D : "0" + D
  return Nowdate.getFullYear() + "-" + M + "-" + D
}

// 获取本月最后一天
export function showMonthLastDay() {
  var Nowdate = new Date()
  var MonthNextFirstDay = new Date(Nowdate.getYear(), Nowdate.getMonth() + 1, 1)
  var MonthLastDay = new Date(MonthNextFirstDay - 86400000)
  var M = Number(MonthLastDay.getMonth()) + 1
  var D = MonthLastDay.getDate()
  M = M > 9 ? M : "0" + M
  D = D > 9 ? D : "0" + D
  return Nowdate.getFullYear() + "-" + M + "-" + D
}
// 获取今年第一天和最后一天
export function getYearFirstLastDay() {
  var firstDay = new Date()
  firstDay.setDate(1)
  firstDay.setMonth(0)
  var time = new Date(firstDay.getFullYear(), 12, 1)
  var lastDay = new Date(time.getTime() - 1000 * 60 * 60 * 24)
  return [firstDay, lastDay]
}
