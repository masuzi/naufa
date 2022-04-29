export const formatRupiah = number => {
  return new Intl.NumberFormat('id-ID', {
    // style: 'currency',
    // currency: 'IDR'
  }).format(number)
}
export function formatDate(dateString) {
  const allDate = dateString.split(' '),
    thisDate = allDate[0].split('-'),
    thisTime = allDate[1].split(':'),
    newDate = [thisDate[2], thisDate[1], thisDate[0]].join('-'),
    hour = thisTime[0],
    min = thisTime[1],
    // sec = thisTime[2],
    newTime = hour + ':' + min

  return newDate + ' ' + newTime
}

 export function unixTime(dt) {
   const date = new Date(dt)
   return date
  }
