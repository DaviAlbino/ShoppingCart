const getSavedCartItems = () => {
  const ol = document.querySelector('.cart__items');
  const storage = localStorage.getItem('cartItems');
  ol.innerHTML = storage;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

// const ol = document.querySelector('.cart__items');

// savedItems.forEach((saved) => {
//   const li = document.createElement('li');
//   li.className = 'cart__item';
//   li.innerText = saved;
//   // li.addEventListener('click', cartItemClickListener);
//   ol.appendChild(li);
// });