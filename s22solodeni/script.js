// MOBILE NAVIGATION
const mobileNavBtn = document.querySelector(`.btn-mobile-nav`);
const navMenu = document.querySelector(`.main-nav`);

mobileNavBtn.addEventListener(`click`, function (e) {
  navMenu.classList.toggle(`nav-open`);
});

// STICKY NAVIGATION
const charactersSection = document.querySelector('.characters-section');
const navBar = document.querySelector('.main-nav');

const implementSticky = function () {
  if (window.scrollY >= charactersSection.offsetTop - navBar.offsetHeight) {
    navBar.classList.add('sticky');
  } else {
    navBar.classList.remove('sticky');
  }
};
document.addEventListener('scroll', implementSticky);

// FAQ
const questionsAll = document.querySelectorAll('.question-item');

questionsAll.forEach((item) => {
  item.addEventListener('click', function (e) {
    const currentTab = e.target.closest('.question-item');
    if (!currentTab || e.target.classList.contains('question-answer')) return;
    questionsAll.forEach((q) => {
      if (q !== currentTab && q.classList.contains('active')) {
        q.classList.remove('active');
      }
    });
    currentTab.classList.toggle('active');
  });
});

// SLIDER - CAROUSEL
const btnLeft = document.querySelector('.author-btn-left');
const btnRight = document.querySelector('.author-btn-right');
const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

const setUpSlides = function () {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${i * 150}%)`;
  });
  slides[currentSlide].classList.add('active');
};

const goTo = function (curSlide) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - curSlide) * 150}%)`;
  });
};

const markDot = function (curSlide) {
  document.querySelector('.dot-active')?.classList?.remove('dot-active');
  document
    .querySelector(`.dot[data-slide="${curSlide + 1}"]`)
    .classList.add('dot-active');
};

const goLeft = function () {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = 2;
  }
  goTo(currentSlide);
  markDot(currentSlide);
};

const goRight = function () {
  if (currentSlide < 2) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  goTo(currentSlide);
  markDot(currentSlide);
};

setUpSlides();
btnLeft.addEventListener('click', goLeft);
btnRight.addEventListener('click', goRight);

dots.forEach((dot) => {
  dot.addEventListener('click', function (e) {
    const eBtn = e.target.closest('button');
    if (!eBtn) return;
    const numDot = +eBtn.getAttribute('data-slide');
    currentSlide = numDot - 1;
    goTo(currentSlide);
    markDot(currentSlide);
  });
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    goLeft();
  } else if (e.key === 'ArrowRight') {
    goRight();
  }
});

// EPISODES BUTTON ALERT
const watchBtns = document.querySelectorAll('.watch-link-button');

watchBtns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    alert('Sorry, this is for demonstration of HTML/CSS only! :(');
  });
});

// SMOOTH SCROLLING
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');

    // Scroll back to top
    if (href === '#') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behaviour: 'smooth',
      });
    }

    // Inplement navigation
    if (href !== '#' && href.startsWith(`#`)) {
      e.preventDefault();
      const section = document.querySelector(href);
      // can't use offsetHeight cause height changes as navBar becomes sticky..
      // so the easy fix for this problem is using a constant height and  keeping it the same acrross different screens..
      const destY = section.offsetTop - 70;
      window.scroll({
        top: destY,
        behavior: 'smooth',
      });
      //   On mobile close the nav menu
      if (navBar.classList.contains('nav-open')) {
        navBar.classList.toggle('nav-open');
      }
    }
  });
});
