const contact = () => {
  const content = document.getElementById('content')
    const items = document.createElement('div');
    items.id = 'contact';

    items.classList.add('homepage');
    const container = document.createElement('div', 'container');
    container.classList.add('card');
    container.innerHTML = `
  <h3 class=""> Get in Touch </h3>
  
  <p class="fa fa-facebook"> : Elijah Obominuru</p>
  <p class="fa fa-twitter"> : @ElijahObominuru</p>
  <p class="fa fa-envelope"> : elijahobominuru@gmail.com</p>
  <p class="fa fa-whatsapp"> : +2348062540732</p>
  <p> </p>`;
    items.appendChild(container);
    content.appendChild(items)

  return null;
};

export default contact;