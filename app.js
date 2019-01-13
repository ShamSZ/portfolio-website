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
let fromTop = 0;
const $navLinks = $('.nav-link');
const mobileBreakpoint = 600;

handleMobileResize();

$(window).on('resize', handleMobileResize);
$(window).on('scroll', handleScroll);
$navLinks.click(scrollTo);

function handleMobileResize(){
  const $navHeight = $('nav').css('height').replace('px', '');
  const $navWidth = $('nav').css('width').replace('px', '');
  const $contactHeight = $('.contact').css('height').replace('px', '');

  if (window.innerWidth > mobileBreakpoint){
    //Not mobile
    $('nav').css('left', `${$navHeight / 2 - $navWidth / 2}px`);
    $('nav').css('top', `${window.innerHeight / 2 - $navHeight / 2}px`);

    $('.contact').css('top', `${window.innerHeight / 2 - $contactHeight / 2}px`);
  } else {
    //Mobile
    $('nav').css('top', '100vh');
    $('nav').css('left', `${window.innerWidth / 2 - $navWidth / 2}px`);
  }
  handleScroll();
}

function handleScroll(){
  const halfway = window.innerHeight / 2;
  fromTop = $(window).scrollTop();
  if(fromTop > $(sections[0]).offset().top - halfway
  && fromTop < $(sections[1]).offset().top - halfway) {
    toggleActiveSection(0);
    //reset width of percentage bar to 0:
    $('b.progress').css('width', '0');

  } else if(fromTop > $(sections[1]).offset().top - halfway
  && fromTop < $(sections[2]).offset().top - halfway) {
    setPosPercentage(fromTop);
    toggleActiveSection(1);

  } else if(fromTop > $(sections[2]).offset().top - halfway) {
    toggleActiveSection(2);

    //reset width of percentage bar to 0:
    $('b.progress').css('width', '0');
  }
  navOnMobile();
}

function navOnMobile(){
  if(window.innerWidth <= mobileBreakpoint){
    //If mobile
    if (fromTop > window.innerHeight) {
      //if scrolled past the home section, stick nav to 5px from top of page
      $('nav').css('position', 'fixed');
      $('nav').css('top', '5px');
    } else {
      //if on the home section, hide nav just below home section
      $('nav').css('position', 'absolute');
      $('nav').css('top', '100vh');
    }
  } else {
    $('nav').css('position', 'fixed');
  }
}

function toggleActiveSection(currentSection){
  $navLinks.removeClass('active');
  $navLinks.eq(currentSection).addClass('active');
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
  $('b.progress').css('width', `${currentPosPercentage}%`);
}
