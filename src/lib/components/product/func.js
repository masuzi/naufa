export function filterByValue(array, string) {
  return array.filter(o => Object.keys(o).some(k => o[k].includes(string.toLowerCase())))
}
