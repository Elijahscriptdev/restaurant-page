const homepage = () => {
  const content = document.getElementById('content');
  const items = document.createElement('div');
  // const menu = document.createElement('div');
  // menu.id = 'menus';
  items.id = 'home';
  items.classList.add('homepage');
  const container = document.createElement('div');
  container.classList.add('container');
  container.innerHTML = `
  <h1 class=""> Tasty Fries </h1>
  <br />
  <p class=""><strong>Taste is everything !!</strong></p>
  <p> </p>`;
  items.appendChild(container);
  content.appendChild(items);
  // content.appendChild(menu);

  return null;
};
export default homepage;
