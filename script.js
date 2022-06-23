// const { fetchProducts } = require('./helpers/fetchProducts');

// const { fetchItem } = require("./helpers/fetchItem");

// const { fetchProducts } = require('./helpers/fetchProducts');

// const item = require('./mocks/item');
// const { results } = require('./mocks/search');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

async function getProductItems() {
  const results = await fetchProducts('computador');
  const sectionItems = document.querySelector('.items');
  return results.map((pc) => { 
    const { id, title, thumbnail } = pc;
    return sectionItems
    .appendChild(createProductItemElement({ sku: id, name: title, image: thumbnail }));  
  });
}

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  const ol = document.querySelector('.cart__items');
  event.target.remove();
  saveCartItems(ol.innerHTML);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  // saveCartItems(ol.innerHTML);
  return li;
};

const newCartItem = async () => {
  await getProductItems();
  const addCartButton = document.querySelectorAll('.item__add');
  const ol = document.querySelector('.cart__items');
  addCartButton.forEach((button) => {
    button.addEventListener('click', async () => {
      const data = await fetchItem(getSkuFromProductItem(button.parentNode));
      const { id, title, price } = data;
      ol.appendChild(createCartItemElement({ sku: id, name: title, salePrice: price }));
      saveCartItems(ol.innerHTML);
    });
  });
};
const getli = () => { 
  const li = document.querySelectorAll('.cart__item');
  li.forEach((item) => {
    item.addEventListener('click', cartItemClickListener);
  });
};

const deleteAllItemsCart = () => {
  const emptyButton = document.querySelector('.empty-cart');
  emptyButton.addEventListener('click', () => {
    const li = document.querySelectorAll('.cart__item');
    li.forEach((item) => item.remove());
  });
};
window.onload = () => { 
  newCartItem();
  getSavedCartItems();
  getli();
  deleteAllItemsCart();
};
