const minimalLength = (length) => (text) =>
  text.length >= length
    ? { isValid: true }
    : { isValid: false, message: `Tamanho mínimo é de ${length}` }

const maximalLength = (length) => (text) =>
  text.length <= length
    ? { isValid: true }
    : { isValid: false, message: `Tamanho máximo é de ${length}` }

const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const correctEmail = (text) =>
  emailRegexp.test(text.toLowerCase())
    ? { isValid: true }
    : { isValid: false, message: 'Não é um email válido' }

export default { maximalLength, minimalLength, correctEmail }
