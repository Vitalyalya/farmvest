///////////////////////////////////////////////////////////
// Make mobile navigation work
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');
btnNavEl.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open');
});

// dark mode toggle

document.addEventListener('DOMContentLoaded', getMode);

function getMode() {
  if (localStorage.getItem('mode') === 'dark') {
    body.classList.add('dm');
  }
}

const darkMode = document.querySelector('.dark-light');
const body = document.querySelector('body');
darkMode.addEventListener('click', () => {
  let mode;

  if (body.classList.contains('dm')) {
    console.log('none');
    mode = 'dark';
    body.classList.remove('dm');
    localStorage.setItem('mode', 'sunny');
  } else {
    body.classList.add('dm');
    localStorage.setItem('mode', 'dark');
  }
});

//

const accCard = document.querySelectorAll('.acc-card');

accCard.forEach(accCard => {
  accCard.addEventListener('click', () => {
    accCard.classList.toggle('open');
  });
});

const btnLeft = document.querySelector('.prev');
const btnRight = document.querySelector('.next');

const btnMobileLeft = document.querySelector('.mobile-prev');
const btnMobileRight = document.querySelector('.mobile-next');

////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove('sticky');
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-60px',
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    // Scroll back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    // Scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile naviagtion
    if (link.classList.contains('nav-link'))
      headerEl.classList.toggle('nav-open');
  });
});

// TESTIMONIALS MOBILE VIEW

const allMobileCards = document.querySelectorAll('.testimonial-card-mobile');

let i = 0;

btnMobileRight.addEventListener('click', () => {
  console.log('clicked right');
  btnMobileLeft.style.display = 'block';

  if (i == 0) {
    allMobileCards[i].classList.toggle('active');
    allMobileCards[i].classList.toggle('go-left');

    allMobileCards[i + 1].classList.toggle('active');
    i++;
    console.log(i);
  } else if (i >= 1) {
    btnMobileLeft.style.display = 'block';
    allMobileCards[i].classList.toggle('active');
    allMobileCards[i].classList.toggle('go-left');

    allMobileCards[i + 1].classList.toggle('active');

    i++;
    console.log(i);
    if (i >= allMobileCards.length - 1) {
      btnMobileRight.style.display = 'none';
    }
  }
});

btnMobileLeft.addEventListener('click', () => {
  console.log('clicked left');
  btnMobileRight.style.display = 'block';
  btnMobileLeft.style.display = 'block';

  {
    allMobileCards[i].classList.toggle('active');
    allMobileCards[i - 1].classList.toggle('active');
    allMobileCards[i].classList.toggle('go-right');
    allMobileCards[i - 1].classList.toggle('go-left');
    i--;
    if (i == 0) {
      btnMobileLeft.style.display = 'none';
      console.log(i);
    }
  }
});

// TESTIMONIALS REGULAR VIEW

const allCards = document.querySelectorAll('.two-cards');

let j = 0;

btnRight.addEventListener('click', () => {
  console.log('clicked right');
  btnLeft.style.display = 'block';

  if (j == 0) {
    allCards[j].classList.toggle('active');
    allCards[j].classList.toggle('go-left');

    allCards[j + 1].classList.toggle('active');
    j++;
    console.log(j);
  } else if (j <= 1) {
    btnLeft.style.display = 'block';
    allCards[j].classList.toggle('active');
    allCards[j].classList.toggle('go-left');

    allCards[j + 1].classList.toggle('active');
    allCards[j - 1].classList.toggle('go-left');
    j++;
    console.log(j);
    if (j >= 2) {
      btnRight.style.display = 'none';
    }
  }
});

btnLeft.addEventListener('click', () => {
  console.log('clicked left');
  btnRight.style.display = 'block';
  btnLeft.style.display = 'block';

  {
    allCards[j].classList.toggle('active');
    allCards[j].classList.toggle('go-right');
    allCards[j - 1].classList.toggle('go-left');
    allCards[j - 1].classList.toggle('active');
    j--;
    if (j == 0) {
      btnLeft.style.display = 'none';
      console.log(j);
    }
  }
});

/////////////////////////////////////////////////////////////
// animations
/////////////////////////////////////////////////////////////
scrollAppear();

function scrollAppear() {
  const mainHeading = document.querySelector('.main-heading');
  const subHeading = document.querySelectorAll('.subheading');

  const ctaHeading = document.querySelector('.cta-heading');
  let ctaPosition = ctaHeading.getBoundingClientRect().top;

  const smallText = document.querySelectorAll('.small-text');

  const ScreenPos = window.innerHeight / 1.2;

  smallText[0].classList.add('text-appear');
  mainHeading.classList.add('text-appear');

  smallText.forEach(function (text) {
    let introPosition = text.getBoundingClientRect().top;

    if (introPosition < ScreenPos) {
      text.classList.add('text-appear');
    }
  });

  subHeading.forEach(function (subheading) {
    let introPosition = subheading.getBoundingClientRect().top;

    if (introPosition < ScreenPos) {
      subheading.classList.add('text-appear');
    }
  });

  if (ctaPosition < ScreenPos) {
    ctaHeading.classList.add('text-appear');
  }
}

window.addEventListener('scroll', scrollAppear);
