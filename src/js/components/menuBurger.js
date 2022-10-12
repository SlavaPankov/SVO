const elements = {
  burgerBtn: document.querySelector('.menu-burger'),
  menu: document.querySelector('.header-bottom')
}

const classes = {
  active: 'menu-open',
  burgerActive: 'menu-burger--active'
}

elements.burgerBtn.addEventListener('click', () => {
  elements.menu.classList.toggle(classes.active);
  elements.burgerBtn.classList.toggle(classes.burgerActive);
});
