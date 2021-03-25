const axios = require('axios');

const personagens = async(req, res) => {

    let listaPersonagens = new Array;

    for(let i = 0; i < 9; i++){
        const { data } = await axios.get('https://anapioficeandfire.com/api/books/');
        const povCharacters = data[i]['povCharacters'];
      
        for(let obv in povCharacters){
            const { data } = await axios.get(povCharacters[obv]);

            async function get(atributo){
                let list = new Array;
                for(let it in atributo){
                    let result = await axios.get(atributo[it]);
                    list.push(result.data);
                }
                return list;
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
                spouse: await get(data.spouse),
                allegiances: await get(data.allegiances),
                books: await get(data.books),
                povBooks: await get(data.povBooks),
                tvSeries: data.tvSeries,
                playedBy: data.playedBy
            }
            listaPersonagens.push(model);

            console.log(`carregando... ${i*10}%`);
        } 
    }

        res.send(listaPersonagens)
}

module.exports = personagens;
