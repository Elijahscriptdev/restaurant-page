const navItems = () => {
  const list = document.createElement('ul');
  list.innerHTML = `
  <li id="home" class="nav-item">
      <a href="#home">Home</a>
  </li>
  <li id="menu" class="nav-item">
      <a href="#menu">Menu</a>
  </li>
  <li id="contact" class="nav-item">
      <a href="#contact">Contact</a>
  </li>
  `;
  return list;
};


const navBar = () => {
  const content = document.getElementById('content')
  const nav = document.createElement('nav');
  const container = document.createElement('div');
  nav.setAttribute('class', 'nav');
  const logo = document.createElement('p');
  logo.setAttribute('class', 'logo');
  logo.innerHTML = `
    <a id="logo" href="#home"> Tasty Fries </a>
  `;
  nav.appendChild(logo);
  nav.appendChild(navItems());
  content.appendChild(nav)
  return null;
};

export default navBar;
