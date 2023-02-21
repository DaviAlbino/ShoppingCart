const getSavedCartItems = () => JSON.parse(localStorage.getItem('cartItems'));

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