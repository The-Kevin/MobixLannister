const axios = require('axios');

const personagens = async() => {
    for(let i = 0; i < 9; i++){
        const { data } = await axios('https://anapioficeandfire.com/api/books/');
        const povCharacters = data[i]['povCharacters'];
      
        for(let obv in povCharacters){
            const link = await axios(povCharacters[obv]);
            console.log(link.data)
        }
        
    }
   
}

module.exports = personagens;