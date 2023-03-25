const bg = document.querySelector('.loading-animation')
let load = 0
let int = setInterval(bluring, 30)

function bluring() {
  load += 4

  if (load > 99) {
    clearInterval(int)
  }

  bg.style.filter = `blur(${scale(load, 0, 100, 40, 0)}px)`
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}