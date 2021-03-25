const axios = require('axios');

const personagens = async(req, res) => {

    let listaPersonagens = new Array;

    for(let i = 0; i < 1; i++){ //9
        const { data } = await axios.get('https://anapioficeandfire.com/api/books/');
        const povCharacters = data[i]['povCharacters'];
        
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

            async function getAllegiances(){
                let allegiances = new Array;

                if(!(data['allegiances'] == '')){
                    for(let i in data['allegiances']){
                        let res = await axios.get(data['allegiances'][i]);
                        allegiances.push(res.data['name']);

                    }
                }
                return allegiances
            }
            async function getBooks(){
                let books = new Array;

                if(!(data['books'] == '')){
                    for(let i in data['books']){
                        let res = await axios.get(data['books'][i]);
                        books.push(res.data['name']);

                    }
                }
                return books
            }
            async function getPovBooks(){
                let povBooks = new Array;

                if(!(data['povBooks'] == '')){
                    for(let i in data['povBooks']){
                        let res = await axios.get(data['povBooks'][i]);
                        povBooks.push(res.data['name']);

                    }
                }
                return povBooks
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
                    allegiances: await getAllegiances(),
                    books: await getBooks(),
                    povBooks: await getPovBooks(),
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
