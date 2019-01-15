const projectsData = [
  {
    name: 'Warp Factor',
    firstParagraph: 'Warp Factor is an entertaining browser-based arcade-style game. Challenge your reaction skills by avoiding the obstacles as you travel at Warp Factor speeds through space and accumulate bonus points to make into the Hall of Fame.',
    secondParagraph: 'This was my first project from General Assembly\'s Web Development Immersive Course. It was an individual project built in a week, and was both the first proper game I had built, and my first real-world type practice with JavaScript.',
    launchLink: 'https://shamsz.github.io/wdi-project-one/',
    repoLink: 'https://github.com/ShamSZ/wdi-project-one',
    stack: 'HTML5, CSS3, JavaScript',
    images: ['images/project1/warp-factor.png', 'images/project1/home.png', 'images/project1/gamemode.png', 'images/project1/shipselect.png', 'https://i.imgur.com/lllBY6a.gif']
  },
  {
    name: 'Rating Ninja',
    firstParagraph: 'Rating Ninja is a web application that uses MongoDB, Express.js and Node.js to store a collection of user added data such as Restaurants. It utilises user authentication to register and log in a user to allow them to make changes to their own data and to add reviews to all restaurants.',
    secondParagraph: 'Rating Ninja was my second project from General Assembly\'s Web Development Immersive. It was an individual project built in one week, and was my first multi-page, RESTful web app that didn\'t only involve working with the front-end. Working on this project helped me understand the basics of working with databases using Node.js packages and the MVC model.',
    launchLink: 'https://rating-ninja.herokuapp.com/',
    repoLink: 'https://github.com/ShamSZ/wdi-project-two',
    stack: 'EJS, MongoDB, Express.js, Node.js, Bulma, CSS3',
    images: ['images/project2/index1.png', 'images/project2/home.png', 'images/project2/register.png', 'images/project2/show1.png', 'images/project2/show2.png', 'images/project2/edit.png', 'images/project2/profile1.png', 'images/project2/profile-edit.png']
  },
  {
    name: 'EventZ',
    firstParagraph: 'EventZ - is an online event planner app. Users can browse, create, attend and keep track of events. It is designed mobile-first and displays the location of an event on the map.',
    secondParagraph: 'This was my third project as part of the General Assembly Web Development Immersive course. The objective was to build a full stack(MEAN), RESTful web application using AngularJS in one week.',
    launchLink: 'https://eventz-planner.herokuapp.com/#!/',
    repoLink: 'https://github.com/ShamSZ/wdi-project-three',
    stack: 'HTML5, MongoDB, Express.js, AngularJS, Node.js, Bulma, Sass, OpenStreetMap API, Mocha & Chai',
    images: ['images/project3/home.png', 'images/project3/mobile1.png', 'images/project3/mobile2.png', 'images/project3/map.png', 'images/project3/register.png', 'images/project3/profile.png', 'images/project3/profile-edit.png']
  },
  {
    name: 'Play & Watch',
    firstParagraph: 'Play & Watch is an e-commerce web app that sells video games and movies. Users can register and keep track of their purchase history, have tailored suggestions made to them in the form of featured products and can leave their ratings. Administrator accounts are able to see all the purchases made and keep track of sales on the statistics page.',
    secondParagraph: 'This was my fourth project as part of the General Assembly Web Development Immersive course. The objective was to build a full stack(MERN), RESTful web application using React.js in one week.',
    launchLink: 'https://play-and-watch.herokuapp.com/',
    repoLink: 'https://github.com/ShamSZ/wdi-project-four',
    stack: 'HTML5, MongoDB, Express.js, React.js, Node.js, Bulma, Sass, Mocha & Chai',
    images: ['images/project4/index2.png', 'images/project4/index1.png', 'images/project4/show1.png', 'images/project4/show2.png', 'images/project4/basket.png', 'images/project4/admin.png', 'images/project4/add.png', 'images/project4/statistics.png']
  }
];

// Need to loop through projectsData and for each of the projects
// create DOM elements

function createProjectBox(project){
  //images
  function getThumbs(){
    let imageTags = project.images.map((image, i) => `<img class="thumb" src="${image}" alt="${project.name} image${i + 1}">`);
    imageTags = imageTags.join('');
    return imageTags;
  }
  const mainImage = `<div style="background-image: url(${project.images[0]})" class="mainImage"></div>`;
  const imageThumbs = `<article class="image-thumbs">${getThumbs()}</article>`;
  const imageBox = `<div class="image">   ${mainImage + imageThumbs} </div>`;


  //links
  const launchLink = `<a target="_blank" href="${project.launchLink}"><i class="fas fa-external-link-alt"></i> Launch</a>`;
  const repoLink = `<a target="_blank" href="${project.repoLink}"><i class="fab fa-github"></i> Repo</a>`;
  const links = `<div class="links"> ${launchLink + repoLink}</div>`;

  //description
  const firstParagraph = `<p>${project.firstParagraph}</p>`;
  const secondParagraph = `<p>${project.secondParagraph}</p>`;

  //text
  const textBox = `<div class="text">   <div>${firstParagraph + secondParagraph}</div> ${links} </div>`;

  //title
  const title = `<div class="title"> <h3>${project.name}</h3> </div>`;

  //tech stack
  const stack = `<div class="stack"> <h4>Tech Stack: ${project.stack}</h4> </div>`;

  //bringing it all together here:
  const descriptionBox = `<div class="description">${title + textBox + stack}</div>`;

  //adding it all to the projects section:
  $('#projects').append(`<div class="project-box"> ${imageBox + descriptionBox}  </div>`);
}

//Create project boxes for each projectData element:
projectsData.forEach((project) => {
  createProjectBox(project);
});

//On load, set active class to first image:
for(let i = 0; i < projectsData.length; i++){
  $('.image-thumbs').eq(i).children().eq(0).addClass('active');
}

// console.log(document.querySelectorAll('.image-thumbs')[0].firstChild);


//Event listener to handle click:
$('.thumb').click(handleClick);

//Set thumb image as main image:
function handleClick(){

  const $thumbs = $(this).closest('.image').children().eq(1);

  $thumbs.children('img').each(function () {
    $(this).removeClass('active');
  });

  const $mainImage = $(this).closest('.image').children().eq(0);
  $mainImage.attr('style', `background-image: url(${this.src})`);

  $(this).addClass('active');
}
