import './css/main.css';

import homepage from './home';
import contact from './contact';
import navBar from './navbar';
import menuTab from './menu';

navBar();
homepage();
contact();
menuTab();

const homePage = document.getElementById('home');
const menuPage = document.getElementById('menu');
const contactPage = document.getElementById('contact');
const logo = document.getElementById('logo');

const homeContainer = document.querySelector('.home-container');
const contactContainer = document.querySelector('#contact-container');
const menuContainer = document.querySelector('.card-columns');

homeContainer.style.display = 'block';
contactContainer.style.display = 'none';
menuContainer.style.display = 'none';

menuPage.addEventListener('click', () => {
  homeContainer.style.display = 'none';
  contactContainer.style.display = 'none';
  menuContainer.style.display = 'block';
});

homePage.addEventListener('click', () => {
  homeContainer.style.display = 'block';
  contactContainer.style.display = 'none';
  menuContainer.style.display = 'none';
});

logo.addEventListener('click', () => {
  homeContainer.style.display = 'block';
  contactContainer.style.display = 'none';
  menuContainer.style.display = 'none';
});

contactPage.addEventListener('click', () => {
  homeContainer.style.display = 'none';
  contactContainer.style.display = 'block';
  menuContainer.style.display = 'none';
});
