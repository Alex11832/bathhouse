document.addEventListener('DOMContentLoaded', function() {
  // Мобильное меню
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');

  if (burger && mobileMenu) {
    burger.addEventListener('click', function(e) {
      e.preventDefault();
      mobileMenu.classList.remove('hidden');
      document.body.style.overflow = "hidden";
    });
  }
  if (mobileMenuClose && mobileMenu) {
    mobileMenuClose.addEventListener('click', function(e) {
      e.preventDefault();
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = "";
    });
  }
  window.addEventListener('resize', function() {
    if (window.innerWidth > 900 && mobileMenu) {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = "";
    }
  });

  // Popup
  const calcForm = document.querySelector('.calc-form');
  const popup = document.querySelector('.popup-thanks');
  const popupClose = document.querySelector('.popup-close');
  if (calcForm && popup) {
    calcForm.addEventListener('submit', function(e) {
      e.preventDefault();
      popup.classList.remove('hidden');
      document.body.style.overflow = "hidden";
    });
  }
  // Закрытие popup по крестику
  if (popup && popupClose) {
    popupClose.addEventListener('click', function(e) {
      e.preventDefault();
      popup.classList.add('hidden');
      document.body.style.overflow = "";
    });
  }
  // Закрытие popup по кнопке "На главную"
  const popupBtn = popup ? popup.querySelector('.cta-btn') : null;
  if (popup && popupBtn) {
    popupBtn.addEventListener('click', function(e) {
      popup.classList.add('hidden');
      document.body.style.overflow = "";
    });
  }
});