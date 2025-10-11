const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btn-login');
const iconClose = document.querySelector('.icon-close');
let darkmode = localStorage.getItem('darkmode');



registerLink.addEventListener('click', ()=> {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
  wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
  wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
  wrapper.classList.remove('active-popup');
});

registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
})

const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', function() {
  document.body.classList.toggle('darkmode');
  if(document.body.classList.contains('darkmode')) {
    toggle.querySelector('svg:last-child').style.display = 'none';
    toggle.querySelector('svg:first-child').style.display = 'block';
  } else {
    toggle.querySelector('svg:first-child').style.display = 'none';
    toggle.querySelector('svg:last-child').style.display = 'block';
  }
});