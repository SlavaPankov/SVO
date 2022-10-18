const elements = {
  colorButtons: document.querySelectorAll('.color-list__item'),
  sizeButtons: document.querySelectorAll('.size-list__item'),
  currentValueColor: document.querySelector('.product-form__value--color'),
  currentValueSize: document.querySelector('.product-form__value--size'),
  hiddenInputColor: document.querySelector('.product-form__color'),
  hiddenInputSize: document.querySelector('.product-form__size')
}

const classes = {
  active: 'color-list__item--active'
}

if (elements.colorButtons.length > 0) {
  elements.colorButtons.forEach(radioBtn => {
    radioBtn.addEventListener('click', (evt) => {
      elements.hiddenInputColor.value = evt.target.dataset.color;
      elements.currentValueColor.textContent = evt.target.dataset.color;

      elements.colorButtons.forEach(button => {
        button.classList.remove(classes.active)
      });

      evt.target.classList.add(classes.active);
    });
  });
}

if (elements.sizeButtons.length > 0) {
  elements.sizeButtons.forEach(radioBtn => {
    radioBtn.addEventListener('click', (evt) => {
      elements.hiddenInputSize.value = evt.target.dataset.size;
      elements.currentValueSize.textContent = evt.target.dataset.size;

      elements.sizeButtons.forEach(button => {
        button.classList.remove(classes.active)
      });

      evt.target.classList.add(classes.active);
    });
  });
}
