const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Teste se ao executar saveCartItems o método localStorage.setItem é chamado', () => {
    saveCartItems('<ol><li>Item</li></ol>');

    expect(localStorage.setItem).toHaveBeenCalled();
  })

  it('Teste se ao executar saveCartItems o método localStorage.setItem é chamado', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    const cartString = 'cartItems';
    const argument = '<ol><li>Item</li></ol>';
    const expected = [cartString, argument]
    
    expect(localStorage.setItem).toHaveBeenCalledWith(...expected);
    // expect(localStorage.setItem).toHaveBeenCalledWith(argument);

  })
});
