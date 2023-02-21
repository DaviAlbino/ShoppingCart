// const { fetchProducts } = require('./helpers/fetchProducts');

// const { fetchItem } = require("./helpers/fetchItem");

// const { fetchProducts } = require('./helpers/fetchProducts');

// const item = require('./mocks/item');
// const { results } = require('./mocks/search');

const ol = document.querySelector('.cart__items');

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

const showLoading = () => {
  const loading = document.createElement('p');
  loading.className = 'loading';
  loading.innerHTML = 'carregando...';
  return loading;
};

// const fadeLoading = () => {
//   const loading = document.createElement('p');
//   loading.className = 'loading';
//   loading.innerHTML = 'carregando...';
//   return loading.remove();
// };

async function getProductItems() {
  const sectionItems = document.querySelector('.items');
  const getLoandingOnScreen = sectionItems.appendChild(showLoading());
  const results = await fetchProducts('computador');
  getLoandingOnScreen.remove();
  return results.map((pc) => { 
    const { id, title, thumbnail } = pc;
    return sectionItems
    .appendChild(createProductItemElement({ sku: id, name: title, image: thumbnail }));  
  });
}

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
  // saveCartItems(ol.innerHTML);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// const showTotalPrice = (salePrice, cartElement) => {  
  
// };

const getPrice = (salePrice, cartElement) => {
  const totalDiv = document.createElement('div');
  totalDiv.className = 'total-price';
  totalDiv.innerText = `${salePrice}`;
  cartElement.appendChild(totalDiv);
};

const newCartItem = async () => {
  await getProductItems();
  const addCartButton = document.querySelectorAll('.item__add');
  addCartButton.forEach((button) => {
    button.addEventListener('click', async () => {
      const data = await fetchItem(getSkuFromProductItem(button.parentNode));
      const { id, title, price } = data;
      ol.appendChild(createCartItemElement({ sku: id, name: title, salePrice: price }));
      saveCartItems(data);
      getPrice(price, ol);
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
    ol.childNodes.forEach((item) => item.remove());
    saveCartItems(data);
  });
};

const showSavedCartItems = () => {
  const savedItemsObject = getSavedCartItems();
  savedItemsObject.forEach((item) => {
    const { id, title, price } = item;
    ol.appendChild(createCartItemElement({ sku: id, name: title, salePrice: price }));
  });
};

window.onload = () => { 
  newCartItem();
  getli();
  showSavedCartItems();
  deleteAllItemsCart();
};
