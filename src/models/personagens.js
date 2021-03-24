const axios = require('axios');

const personagens = async(req, res) => {

    for(let i = 0; i < 9; i++){
        const { data } = await axios('https://anapioficeandfire.com/api/books/');
        const povCharacters = data[i]['povCharacters'];
      
        for(let obv in povCharacters){
            const { data } = await axios(povCharacters[obv]);

            async function le(atributo){
                for(let i in atributo){
                    const {data} = await axios(atributo[i]);
                    return data.name;
                }
            }
            const model = {
                name: data.name,
                gender: data.gender,
                culture: data.culture,
                born: data.born,
                died: data.died,
                titles: data.titles,
                aliases: data.aliases,
                father: data.father,
                mother: data.mother,
                //spouse: await le(data.spouse),
                allegiances: await le(data.allegiances),
                books: await le(data.books),
                povBooks: await le(data.povBooks),
                tvSeries: data.tvSeries,
                playedBy: data.playedBy
            }
            console.log(model)
            
        }
        
    }
}

module.exports = personagens;