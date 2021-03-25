const axios = require('axios');
const base64 = require('nodejs-base64-converter');

const capas = async (req, res) => {

    const biblioteca = new Array;

    let livro1 = await axios.get('https://covers.openlibrary.org/b/id/9269962-L.jpg');
    let livro2 = await axios.get('https://covers.openlibrary.org/b/id/8231751-L.jpg');
    let livro3 = await axios.get('https://covers.openlibrary.org/b/id/8231879-L.jpg');
    let livro4 = await axios.get('https://covers.openlibrary.org/b/id/6501256-L.jpg');
    let livro5 = await axios.get('https://covers.openlibrary.org/b/id/7139672-L.jpg');

    function encode(livro){
        let result = base64.encode(livro.data);
        return result
    }

    biblioteca.push({"livro 1": encode(livro1)});
    biblioteca.push({"livro 2": encode(livro2)});
    biblioteca.push({"livro 3": encode(livro3)});
    biblioteca.push({"livro 4": encode(livro4)});
    biblioteca.push({"livro 5": encode(livro5)});
    
    res.send(biblioteca)
}

module.exports = capas;