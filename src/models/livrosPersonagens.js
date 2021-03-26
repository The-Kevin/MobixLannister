const axios = require('axios');

const livrosPersonagens = async (req, res) => {

    let quantidade = 20 // retornam 10 personagens
    let modelo = new Array;
    for(let i = 1; i <= quantidade; i++){
        try{
            const character = await axios.get(`https://anapioficeandfire.com/api/characters/${i}`);
            if(!(character.data['name'] == '')){ 

                async function get(atributo){
                    let livros = new Array;
                    for(let it in atributo){
                        let result = await axios.get(atributo[it]);
                        livros.push(result.data['name']);
                    }
                    return livros;
                }


                const model = {
                    name: character.data['name'],
                    books: await get(character.data['books'])
                }
                modelo.push(model);
            }
            
        }catch(error){
            continue;
        }        
        console.log(`loading... ${i}/${quantidade}`);
    }

    res.send(modelo)
   
}

module.exports = livrosPersonagens;