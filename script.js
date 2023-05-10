setInterval(setZegar, 1000)

const godzina = document.querySelector('[data-hour-wsk]')
const minuta = document.querySelector('[data-minute-wsk]')
const sekunda = document.querySelector('[data-second-wsk]')

function setZegar() {
  const data = new Date()
  const secondsRatio = data.getSeconds() / 60
  const minutesRatio = (secondsRatio + data.getMinutes()) / 60
  const hoursRatio = (minutesRatio + data.getHours()) / 12
  setObrot(sekunda, secondsRatio)
  setObrot(minuta, minutesRatio)
  setObrot(godzina, hoursRatio)
}

function setObrot(element, obrot) {
  element.style.setProperty('--rotation', obrot * 360)
}

setZegar()