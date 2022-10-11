const elements = {
  minusBtn: document.querySelectorAll('.card__minus'),
  plusBtn: document.querySelectorAll('.card__plus'),
  countInput: document.querySelectorAll('.card__input-count')
}

if (elements.minusBtn.length > 0 && elements.plusBtn.length > 0) {
  elements.plusBtn.forEach((plus, index) => {
    plus.addEventListener('click', () => {
      elements.countInput[index].value++;
    });
  });
  elements.minusBtn.forEach((minus, index) => {
    minus.addEventListener('click', () => {
      elements.countInput[index].value--;

      if (elements.countInput[index].value < 1) {
        elements.countInput[index].value = 1;
      }
    });
  });
}
