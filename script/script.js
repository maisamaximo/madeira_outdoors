const header = document.querySelector('header');

window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', window.scrollY > 60);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
menu.classList.toggle('bx-x');
navbar.classList.toggle('open');
};

document.addEventListener('DOMContentLoaded', function () {
    var accButtons = document.querySelectorAll('.accordion-button');
  
    accButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        // Toggle active class on the button
        this.classList.toggle('active');
        
        // Control the accordion content visibility
        var content = this.nextElementSibling;
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
  
        // Close other accordion items
        accButtons.forEach(function (otherBtn) {
          if (otherBtn !== btn) {
            otherBtn.classList.remove('active');
            otherBtn.nextElementSibling.style.display = 'none';
          }
        });
      });
    });
  });
  