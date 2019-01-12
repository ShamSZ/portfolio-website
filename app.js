const style1 =
    'color: #FC3C3C;' +
    'font-family: Helvetica;' +
    'font-size: 12px;';
const style2 =
    'color: #393E46;' +
    'font-size: 14px;' +
    'font-weight: bold;';

console.log('%cPsst... you there! 👋', style1);
console.log('%cThanks for checking out my website. I built this from scratch using HTML, Sass, Canvas and jQuery.', style1);
console.log('%cIf you\'d like to get in touch, contact me on the below:', style1);
console.log('%csham.szoda@gmail.com', style2);
console.log('%cor', style1);
console.log('%clinkedin.com/in/ShamSZ', style2);

const sections = [ '#home', '#projects', '#about'];
let currentSection = 0;
let fromTop = 0;
const halfway = window.innerHeight / 2;
const $navLink = $('.navLink');
$(window).on('scroll', () => {
  fromTop = $(window).scrollTop();
  if(fromTop > $(sections[0]).offset().top - halfway
  && fromTop < $(sections[1]).offset().top - halfway) {
    currentSection = 0;
    $navLink.removeClass('active');
    $navLink.eq(currentSection).addClass('active');
    // navLinks[currentSection].class('active');
  } else if(fromTop > $(sections[1]).offset().top - halfway
  && fromTop < $(sections[2]).offset().top - halfway) {
    currentSection = 1;
    $navLink.removeClass('active');
    $navLink.eq(currentSection).addClass('active');
  } else if(fromTop > $(sections[2]).offset().top - halfway) {
    currentSection = 2;
    $navLink.removeClass('active');
    $navLink.eq(currentSection).addClass('active');
  }
});
