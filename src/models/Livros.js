const { default: axios } = require("axios");

const livros = async (req, res) => {
    const id = req.params.id

    try{
        const {data} = await axios(`https://anapioficeandfire.com/api/books/${id}`)

        const model = {
            name: data.name,
            authors: data.authors,
            numberOfPages: data.numberOfPages,
            publisher: data.publisher,
            country: data.country,
            mediaType: data.mediaType,
            released: data.released
        }
        return res.send(model);
    }catch(error){
        res.status(404).send("Id não encontrado!")
    }
   
}

module.exports = livros;