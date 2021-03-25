const axios = require('axios');


const jaimeLannister = async (req, res) => {
    const {data} = await axios.get('https://anapioficeandfire.com/api/characters/529');

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

    res.send(model)
}

module.exports = jaimeLannister;