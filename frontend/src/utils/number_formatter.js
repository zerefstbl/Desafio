const numberFormatter = (number) => {
  const newNumber = number.toString()
  return newNumber.replace(/\D/g, '')
  .replace(/(\d{2})(\d)/, '($1) $2')
  .replace(/(\d{5})(\d)/, '$1-$2')
  .replace(/(-\d{4})\d+?$/, '$1')
}

export default numberFormatter;