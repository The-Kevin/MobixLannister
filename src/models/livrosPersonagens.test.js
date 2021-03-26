const personagens = require('./livrosPersonagens');

it('test livro', async () => {
    const person =  personagens;

    expect(person).not.toBeNull();
    expect(person).not.toBeUndefined();
})