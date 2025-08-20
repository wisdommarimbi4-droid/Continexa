
// Mobile nav
const burger = document.querySelector('.hamburger');
const menu = document.querySelector('nav ul');
if(burger && menu){
  burger.addEventListener('click',()=>menu.classList.toggle('open'));
}

// Simple EN/AR toggle
const toggle = document.querySelector('.lang-toggle');
if(toggle){
  toggle.addEventListener('click',()=>{
    document.documentElement.classList.toggle('dir-rtl');
    document.querySelectorAll('[data-en],[data-ar]').forEach(el=>{
      const isRTL = document.documentElement.classList.contains('dir-rtl');
      el.textContent = isRTL ? el.getAttribute('data-ar') : el.getAttribute('data-en');
    });
    toggle.textContent = document.documentElement.classList.contains('dir-rtl') ? 'AR' : 'EN';
  });
}
