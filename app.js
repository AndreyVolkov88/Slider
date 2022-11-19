const sliders = document.querySelectorAll('.slide')

for (const slider of sliders) {
  slider.addEventListener('click', () => {
    clearActiveClasses()
    slider.classList.add('active')
  })
}

const clearActiveClasses = () => {
  sliders.forEach((slider) => {
    slider.classList.remove('active')
  })
}