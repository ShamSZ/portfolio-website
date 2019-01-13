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
const $navLinks = $('.nav-link');

handleResize();

$(window).on('resize', handleResize);
$(window).on('scroll', handleScroll);
$navLinks.click(scrollTo);

function handleResize(){
  const $navHeight = $('nav').css('height').replace('px', '');
  const $contactHeight = $('.contact').css('height').replace('px', '');

  $('nav').css('top', `${window.innerHeight / 2 - $navHeight / 2}px`);
  $('.contact').css('top', `${window.innerHeight / 2 - $contactHeight / 2}px`);
}

function handleScroll(){
  const halfway = window.innerHeight / 2;
  fromTop = $(window).scrollTop();
  if(fromTop > $(sections[0]).offset().top - halfway
  && fromTop < $(sections[1]).offset().top - halfway) {
    currentSection = 0;
    $navLinks.removeClass('active');
    $navLinks.eq(currentSection).addClass('active');

    //reset width of percentage bar to 0:
    $('b.percentage').css('width', '0');

  } else if(fromTop > $(sections[1]).offset().top - halfway
  && fromTop < $(sections[2]).offset().top - halfway) {
    setPosPercentage(fromTop);
    currentSection = 1;
    $navLinks.removeClass('active');
    $navLinks.eq(currentSection).addClass('active');

  } else if(fromTop > $(sections[2]).offset().top - halfway) {
    currentSection = 2;
    $navLinks.removeClass('active');
    $navLinks.eq(currentSection).addClass('active');

    //reset width of percentage bar to 0:
    $('b.percentage').css('width', '0');
  }
}



function scrollTo(){
  const target = `#${$(this).children().eq(0).html().toLowerCase()}`;
  $(target)[0].scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function setPosPercentage(fromTop){
  //Getting the total height of the Projects Section
  //(Start of About minus start of Projects):
  const projectsHeight = $(sections[2]).offset().top - $(sections[1]).offset().top;

  //As the Projects section is active after halfway scroll from home,
  //I need to divide the starting point(in pixels) by 2:
  const projectsStart = $(sections[1]).offset().top / 2;

  //To represent how far I have scrolled(fromTop) from the projectsStart as a percentage,
  //fromTop - projectsStart gives me the number of pixels I have scrolled since projectsStart,
  const pixelsFromStart = fromTop - projectsStart;
  //now I just compare that to the projectsHeight and turn it into a percentage:
  const currentPosPercentage = Math.round((pixelsFromStart / projectsHeight) * 100);
  //set bar width to currentPosPercentage:
  $('b.percentage').css('width', `${currentPosPercentage}%`);
}
