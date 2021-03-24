const axios = require('axios');

const personagens = async(req, res) => {

    let listaPersonagens = new Array;

    for(let i = 0; i < 9; i++){
        const { data } = await axios('https://anapioficeandfire.com/api/books/');
        const povCharacters = data[i]['povCharacters'];
      
        for(let obv in povCharacters){
            const { data } = await axios(povCharacters[obv]);

            async function le(atributo){
                let array = new Array;
                for(let i in atributo){
                    try{
                        const {data} = await axios(atributo[i]);
                    }catch(error){
                        return atributo;
                    }
                    array.push(data.name)
                    return array
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
                spouse: await le(data.spouse),
                allegiances: await le(data.allegiances),
                books: await le(data.books),
                povBooks: await le(data.povBooks),
                tvSeries: data.tvSeries,
                playedBy: data.playedBy
            }
            listaPersonagens.push(model);

            console.log(`carregando... ${i*10}%`);
        } 
    }

        while(true){res.send(listaPersonagens)}
}

module.exports = personagens;