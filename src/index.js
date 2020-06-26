import './css/main.css';

import homepage from './home.js';
import contact from './contact.js';
import navBar from './navbar';
import menuTab from './menu.js';

const container = document.createElement('div');
container.setAttribute('id', 'container');

navBar();
homepage();
contact();
menuTab();

// const start = () => {
//     content.appendChild(navBar());
//     content.appendChild(container);
//     container.appendChild(homepage());
// };
// start();

// const homePage = document.getElementById('home');
// const menuPage = document.getElementById('menu');
// const contactPage = document.getElementById('contact');
// const logo = document.getElementById('logo');

// const clickHome = () => {
//     container.innerHTML = '';
//     container.appendChild(home());
//     homePage.classList.add('active');
//     menuPage.classList.remove('active');
//     contactPage.classList.remove('active');
// };
// clickHome();

// const clickMenu = () => {
//     container.innerHTML = '';
//     container.appendChild(menu());
//     menuPage.classList.add('active');
//     homePage.classList.remove('active');
//     contactPage.classList.remove('active');
// };

// const clickContact = () => {
//     container.innerHTML = '';
//     container.appendChild(contact());
//     homePage.classList.remove('active');
//     menuPage.classList.remove('active');
//     contactPage.classList.add('active');
// };

// homePage.addEventListener('click', () => {
//     clickHome();
// });

// logo.addEventListener('click', () => {
//     clickHome();
// });

// menuPage.addEventListener('click', () => {
//     clickMenu();
// });

// contactPage.addEventListener('click', () => {
//     clickContact();
// });