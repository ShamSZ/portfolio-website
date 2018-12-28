console.log('Psst... Hey!');
console.log('Thanks for checking my website out. If you want to get in touch, go to the about section');
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
