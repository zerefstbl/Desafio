export default function dateFormatter(date) {
  return date.split('-').reverse().join('-')
}