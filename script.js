'use strict'

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', showNextContent)

showNextContent()

function showNextContent() {
  const triggerSrolling = (window.innerHeight / 5) * 4
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top
    boxTop < triggerSrolling
      ? box.classList.add('show')
      : box.classList.remove('show')
  })
}
