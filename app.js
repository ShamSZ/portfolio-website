const sections = [ '#header', '#projects', '#about'];
let currentSection = 0;
let fromTop = 0;
const halfway = window.innerHeight / 2;

$(window).on('scroll', () => {
  fromTop = $(window).scrollTop();
  if(fromTop > $(sections[0]).offset().top - halfway
  && fromTop < $(sections[1]).offset().top - halfway) {
    currentSection = 0;
  } else if(fromTop > $(sections[1]).offset().top - halfway
  && fromTop < $(sections[2]).offset().top - halfway) {
    currentSection = 1;
  } else if(fromTop > $(sections[2]).offset().top - halfway) {
    currentSection = 2;
  }
  console.log(sections[currentSection]);
});
