require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  })

  it('Teste se fetch foi chamada ao executar a função fetchProducts', async () => {
    await fetchProducts('computador');

    expect(fetch).toHaveBeenCalled();
  })

  it('Teste se ao utilizar a função com o argumento "computador" a função fetch irá usar como referência a URL correta', async () => {
    await fetchProducts('computador');

    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  } )

  it('Teste se ao utilizar a função com o argumento "computador" retorna um objeto exatamente igual ao objeto computadorSearch', async () => {
    const productsObject = await fetchProducts('computador');
    
    expect(productsObject).toStrictEqual(computadorSearch)
  } )

  it('Testar se ao chamar a função fetchProducts sem argumento, retornar um erro escrito "You must provide an url"', async () => {
    const productsNoArgument = await fetchProducts();

    expect(productsNoArgument).toEqual(new Error ('You must provide an url'));
  })
});
