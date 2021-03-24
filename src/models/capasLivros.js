const axios = require('axios');
const base64 = require('nodejs-base64-converter');

const capas = async (req, res) => {
   
    let livro1 = await axios('https://covers.openlibrary.org/b/id/9269962-L.jpg');
    let livro2 = await axios('https://covers.openlibrary.org/b/id/8231751-L.jpg');
    let livro3 = await axios('https://covers.openlibrary.org/b/id/8231879-L.jpg');
    let livro4 = await axios('https://covers.openlibrary.org/b/id/6501256-L.jpg');
    let livro5 = await axios('https://covers.openlibrary.org/b/id/7139672-L.jpg');

    let biblioteca = {
        "livro1": base64.encode(livro1.data),
        "livro2": base64.encode(livro2.data),
        "livro3": base64.encode(livro3.data),
        "livro4": base64.encode(livro4.data),
        "livro5": base64.encode(livro5.data)
    }
    
    console.log(biblioteca);
    res.send(biblioteca);
}

module.exports = capas;