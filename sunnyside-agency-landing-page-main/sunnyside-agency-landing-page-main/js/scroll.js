const about = document.getElementById('about');
const btnAbout = document.querySelectorAll('.btnAbout');

const services = document.getElementById('services');
const btnServices = document.querySelectorAll('.btnServices');

const projects = document.getElementById('projects');
const btnProjects = document.querySelectorAll('.btnProjects');

const contact = document.getElementById('contact');
const btnContact = document.querySelectorAll('.btnContact');

const header = document.querySelector('header');
const btnLogo = document.querySelector('.btnUp');



console.log(about);
console.log(btnAbout);



const scrollPage = (btn, section) => btn.addEventListener('click', () => section.scrollIntoView({behavior: 'smooth'}));

btnAbout.forEach((el) => {scrollPage(el, about);
console.log(el)});
btnServices.forEach((el) => scrollPage(el, services));
btnProjects.forEach((el) => scrollPage(el, projects));
btnContact.forEach((el) => scrollPage(el, contact));
scrollPage(btnLogo, header);
