import six from './assets/images/six.jpg';
import two from './assets/images/two.jpg';
import three from './assets/images/three.jpg';

const menuTab = () => {
  const menuList = [
    [
      six,
      'Hamburguer',
      'This is an insane hamburguer made with fine ingredients',
    ],
    [
      two,
      'Fries',
      'This is an insane fri collection made with fine ingredients... So decadent!',
    ],
    [
      three,
      'Waffle',
      'This is an insane waffle housing of yumminess made with fine ingredients... Can you handle it!',
    ],
  ];
  const content = document.getElementById('content');
  // Create the tags
  const cardColumn = document.createElement('div');
  cardColumn.setAttribute('class', 'card-columns');

  /* eslint-disable */
    for (let i = 0; i < menuList.length; i += 1) {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        const cardImageTop = document.createElement('img');
        cardImageTop.setAttribute('class', 'card-img-top');
        cardImageTop.src = menuList[i][0];
        const cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body');
        const cardTitle = document.createElement('h5');
        cardTitle.setAttribute('class', 'card-title');
        cardTitle.textContent = menuList[i][1];
        const cardText = document.createElement('p');
        cardText.setAttribute('class', 'card-text');
        cardText.textContent = menuList[i][2];
        // Add it
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardImageTop);
        card.appendChild(cardBody);
        cardColumn.appendChild(card);
    }
    /* eslint-enable */
  content.appendChild(cardColumn);
};

export default menuTab;