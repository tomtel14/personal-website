// project data
const projects = [
  {
    id: 1,
    url: "https://elevator-simulation.netlify.app/",
    imgSrc: "img/Portfolio/project-7.png",
    title: "Elevator Simulation App",
    desc: "I wanted to work on a challenging logical problem so I came up with this idea of modelling a working dual elevator system. Coded in plain JavaScript to improve my proficiency of JS fundamentals.",
    gh: "https://github.com/tomtel14/elevator-simulation"
  },
  {
    id: 2,
    url: "https://performance-tracker-app.netlify.app/",
    imgSrc: "img/Portfolio/project-8.png",
    title: "Football Data Tracker App",
    desc: "Built using function components in React, this responsive app enables users to input data from football matches. The data is then presented in a table and is used to calculate and display statistics for the user.",
    gh: "https://github.com/tomtel14/performance-tracker-app"
  },
  {
    id: 3,
    url: "retrofootballshirts.html",
    imgSrc: "img/Portfolio/project-1.png",
    title: "Retro Football Shirts Store",
    desc: "A landing page for an online store with a clean UI and functioning shopping basket. Used Bootstrap to help structure the layout alongside my own CSS. Lots of object-oriented JavaScript in this project!",
    gh: "https://github.com/tomtel14/retro-football-shirts"
  },
  {
    id: 4,
    url: "http://www.ag-electricalservices.co.uk",
    imgSrc: "img/Portfolio/project-4.png",
    title: "AG Electrical Services",
    desc: "Designed and deployed this site for a client using React JS. Used React router to keep UI in sync with the URL and made use of React hooks including useState and useEffect.",
    gh: "https://github.com/tomtel14/ag-electrical-services-website"
  },
  {
    id: 5,
    url: "http://www.tomcagnoni.co.uk",
    imgSrc: "img/Portfolio/project-5.png",
    title: "Tom Cagnoni",
    desc: "Another site built using function components in React JS for a client who wanted to showcase his musical work and services online. Used React hooks to achieve the responsive design.",
    gh: "https://github.com/tomtel14/tom-cagnoni-website"
  },
  {
    id: 6,
    url: "galleryapp.html",
    imgSrc: "img/Portfolio/project-2.png",
    title: "Holiday Pics Gallery App",
    desc: "A collection of my favourite holiday photos. A simple SPA which required me to work with an array of objects. Includes functionality which enables the user to scroll back and forth through a shuffled array of images.",
    gh: "https://github.com/tomtel14/gallery-app"
  },
  {
    id: 7,
    url: "index.html",
    imgSrc: "img/Portfolio/project-3.png",
    title: "Personal Portfolio",
    desc: "The webpage you’re currently looking at! Features a responsive layout with a fixed navbar and smooth-scrolling behaviour which requires JavaScript to function correctly.",
    gh: "https://github.com/tomtel14/personal-website"
  },
]

// only show script incl images once page content has loaded 
window.addEventListener('load', (e) => {
  document.getElementById('hide-all').style.display = 'block';
  displayProjects()
})

// displays projects
const projectsSection = document.querySelector('.projects-page-center');

const displayProjects = () => {
  let projectsHTML = projects.map((project) => {
    return `
      <article class="single-project">
        <div class="project-container">
          <a href=${project.url} target="_blank"><img src=${project.imgSrc} class="project-img"
              alt="screenshot of ${project.title} project"></a>
          <a href=${project.url} target="_blank" class="project-icon">
            <i class="fas fa-home"></i>
          </a>
        </div>
        <div class="project-details">
          <h4>${project.title}</h4>
          <p>${project.desc}</p>
          <div class="project-footer">
            <a href=${project.gh} target="_blank">source code</a>
            <span>
              <i class="fab fa-github"></i>
            </span>
          </div>
        </div>
      </article>
      `
  })
  projectsHTML = projectsHTML.join('');
  projectsSection.innerHTML = projectsHTML;
}


// open/close links using navToggle
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const menuClickBtn = document.getElementById('menu-click-btn');

navToggle.addEventListener('click', function () {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  menuClickBtn.classList.toggle("fa-times");
});

// Set-up: when we scroll past height of nav bar, then it becomes fixed at the top (wide screens).
const navbar = document.getElementById('nav');

window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
});

// issue: when we click on the links we are not taken to the right place
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;

    const fixedNav = navbar.classList.contains('fixed-nav');

    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }

    if (navHeight > 92) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });

    linksContainer.style.height = 0;

    menuClickBtn.classList.remove('fa-times');
  });
});

// hovering over project images highlights icon
const listener = document.querySelector('.projects-page-center');

listener.addEventListener('mouseover', (e) => {
  if (e.target.className === 'project-img') {
    let icon = e.target.parentNode.nextElementSibling;
    icon.style.color = 'black';
  }
})

listener.addEventListener('mouseout', (e) => {
  if (e.target.className === 'project-img') {
    let icon = e.target.parentNode.nextElementSibling;
    icon.style.color = 'rgba(0, 0, 0, 0.3)';
  }
})


// set year for footer
const date = document.querySelector('#date');

date.innerHTML = new Date().getFullYear();
