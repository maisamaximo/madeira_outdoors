const header = document.querySelector('header');

window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', window.scrollY > 60);
});

document.getElementById('menu-icon').addEventListener('click', function () {
  var navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
});
