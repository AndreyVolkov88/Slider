function slidesPlugins(activeSlide = 0) {
  const sliders = document.querySelectorAll('.slide')

  sliders[activeSlide].classList.add('active')

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
}

slidesPlugins(0)