const getSavedCartItems = () => 
  // const ol = document.querySelector('.cart__items');
   localStorage.getItem('cartItems');
// savedItems.forEach((saved) => {
//   const li = document.createElement('li');
//   li.className = 'cart__item';
//   li.innerText = saved;
//   // li.addEventListener('click', cartItemClickListener);
//   ol.appendChild(li);
// });

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
