// only show script incl images once page content has loaded 
window.addEventListener('load', (e) => {
  document.getElementById('hide-all').style.display = 'block';
})

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
  });
});

// hovering over project images highlights icon
const images = document.querySelectorAll('.project-container img');

images.forEach(function (image) {

  image.addEventListener('mouseover', function (e) {
    const icon = e.target.parentNode.parentNode.children[1];
    icon.style.color = 'black';


  });
  image.addEventListener('mouseout', function (e) {
    const icon = e.target.parentNode.parentNode.children[1];
    icon.style.color = 'rgba(0, 0, 0, 0.3)';
  })
})

// set year for footer
const date = document.querySelector('#date');

date.innerHTML = new Date().getFullYear();
