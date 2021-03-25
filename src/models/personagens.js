const axios = require('axios');

const personagens = async(req, res) => {

    let listaPersonagens = new Array;

    for(let i = 0; i < 5; i++){
        const { data } = await axios.get('https://anapioficeandfire.com/api/books/');
        const povCharacters = data[i]['povCharacters'];

        listaPersonagens.push(`Principais personagens do livro ${i+1}`)

        for(let obv in povCharacters){
            const { data } = await axios.get(povCharacters[obv]);

            async function getSpouse(){
                let spouse = new Array;

                if(!(data['spouse'] == '')){
                    let res = await axios.get(data['spouse']);
                    spouse.push(res.data['name']);
                }
                return spouse
            }

            async function get(atributo){
                let resultado = new Array;

                if(!(data[atributo] == '')){
                    for(let i in data[atributo]){
                        let res = await axios.get(data[atributo][i]);
                        resultado.push(res.data['name']);
                    }
                }
                return resultado;
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
                    spouse: await getSpouse(),
                    allegiances: await get('allegiances'),
                    books: await get('books'),
                    povBooks: await get('povBooks'),
                    tvSeries: data.tvSeries,
                    playedBy: data.playedBy
                }
                listaPersonagens.push(model);
                console.log(`carregando informações... ${i+1}/5 livros`)
        } 
    }
        res.send(listaPersonagens)
}

module.exports = personagens;
