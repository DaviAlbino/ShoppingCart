const saveCartItems = (htmlElement) => {
    // const ol = document.querySelector('.cart__items');
    localStorage.setItem('cartItems', htmlElement);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
