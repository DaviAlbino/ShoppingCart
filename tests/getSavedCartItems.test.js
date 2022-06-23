const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Teste se ao executar saveCartItems o método localStorage.setItem é chamado', () => {
    getSavedCartItems();

    expect(localStorage.getItem).toHaveBeenCalled();
  })

  it('Teste se ao executar saveCartItems o método localStorage.setItem é chamado', () => {
    getSavedCartItems();
    const expected = 'cartItems';
    
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  })
});
