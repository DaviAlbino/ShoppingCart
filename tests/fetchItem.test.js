require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Teste se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  })

  it('Teste se fetch foi chamada ao executar a função fetchItem', async () => {
    await fetchItem("MLB1615760527");

    expect(fetch).toHaveBeenCalled();
  })

  it('Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint correto', async () => {
    await fetchItem("MLB1615760527");

    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  })

  it('Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item.', async () => {
    const itemsObject = await fetchItem("MLB1615760527");

    expect(itemsObject).toStrictEqual(item);
  })

  it('Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item.', async () => {
    const itemsWithNoArgument = await fetchItem();

    expect(itemsWithNoArgument).toEqual(new Error ('You must provide an url'));
  })
});
