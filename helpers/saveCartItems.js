const saveCartItems = (dataObject) => {
  const oldItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  oldItems.push(dataObject);
  localStorage.setItem('cartItems', JSON.stringify(oldItems));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
