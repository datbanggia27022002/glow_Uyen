const list = document.querySelectorAll('span')
var index = 0

setInterval((e) => {
  list.forEach((e) => {
    e.classList.remove('change-properties')
  })
  list[index].classList.add('change-properties')
  index++
  if (index == list.length) {
    index = 0
  }
}, 300)

const theCanvas = document.querySelector('canvas')
const ctx = theCanvas.getContext('2d')
const objects = []
class Circle {
  constructor() {
    this.x = Math.random() * theCanvas.width
    this.y = Math.random() * theCanvas.height
    this.size = Math.random() * 30 + 1
    this.speedX = Math.random() * 3 - 1.5
    this.speedY = Math.random() * 3 - 1.5
  }
  create() {
    ctx.fillStyle = 'aqua'
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
  update() {
    this.x += this.speedX
    if (this.x >= theCanvas.width) {
      this.x = 0
    }
    this.y += this.speedY
    if (this.y >= theCanvas.height) {
      this.y = 0
    }
  }
}

function addObjects() {
  for (let i = 0; i < 300; i++) {
    objects.push(new Circle())
  }
}

addObjects()

function createCircle() {
  for (let i = 0; i < objects.length; i++) {
    objects[i].create()
    objects[i].update()
  }
}

createCircle()

function clear() {
  ctx.clearRect(0, 0, theCanvas.width, theCanvas.height)
  createCircle()
  requestAnimationFrame(clear)
}
clear()
