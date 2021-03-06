const start = (req, res) => {
    const model = {
        Inicio: {
            "navegação": "utilize a rotas para obter os modulos",
            "rotas disponíveis": [
                "http://127.0.0.1:3000/personagens",
                "http://127.0.0.1:3000/capas",
                "http://127.0.0.1:3000/livros",
            ]
        },
        Personagens: {
            "descrição": {
                "desafio": "obtenha a informação completa dos principais personagens (povCharacters) das Crônicas do Gelo e Fogo.",
                "rota": "http://127.0.0.1:3000/personagens",
                "funcionamento": "A Api percorre todos os campos 'povCharacters' e requisita as informações contidas nas urls" +
                " um novo loops é acionado percorrendo cada campo do resultado da url e o processo é refeito retornando os nomes contido novamente nos campos de cada url!"+
                " por ultimo, é retornado um Json com as informações finais"
            }
        },
        Capas: {
            "descrição": {
                "desafio": ["Obtenha a capa de um ou mais livros", "A capa do livro deverá ser apresentada no formato base64"],
                "rota": "http://127.0.0.1:3000/capas",
                "funcionamento": "A Api requisita o JPEG de cada um dos livros, em seguida é passada uma função que transforma o resultado em base64 conforme requisitado e por fim é adicionado a um array, o resultado do mesmo é retornado "
            }
        },
        LivrosPersonagem: {
            "descrição": {
                "desafio": "Obtenha todos os livros relacionados a um personagem",
                "rota": "http://127.0.0.1:3000/livrosPersonagem",
                "funcionamento": "A Api percorre todos os ids referentes a rota characters (https://anapioficeandfire.com/api/characters/<id>), caso encontre uma pagina referente a um personagem, retorna os campos name e books",
            },
            "obs": "não existe um padrão referente aos ids dos personagens, apenas alguns ids aleatorios retornam personagens reais dos livros, por este motivo o loop tem valor fixo de 20 ids a serem percorridos, podendo ser alterado para os 2028 ids possiveis"
        },
        Jaime: {
            "descrição":{
                "desafio": "Obtenha o detalhe de um ou mais personagens.",
                "rota": "http://127.0.0.1:3000/jaime",
                "funcionamento": "A Api busca os campos referentes a url do personagem Jaime Lannister (personagem 529)"
            }
        },
        Sansa: {
            "descrição":{
                "desafio": "Obtenha o detalhe de um ou mais personagens.",
                "rota": "http://127.0.0.1:3000/sansa",
                "funcionamento": "A Api busca os campos referentes a url do personagem Sansa Stark (personagem 957)"
            }
        },
        Arya: {
            "descrição":{
                "desafio": "Obtenha o detalhe de um ou mais personagens.",
                "rota": "http://127.0.0.1:3000/arya",
                "funcionamento": "A Api busca os campos referentes a url do personagem Arya Stark (personagem 148)"
            }
        },
        personagemUnico: {
                "descrição": {
                    "modulo": "modulo feito após o prazo de entrega",
                    "rota": "http://127.0.0.1:3000/personagemUnico/{id}",
                    "funcionamento": "retorna o personagem de acordo com o id"
                }
        },
        livros: {
            "descrição": {
                "modulo": "modulo feito após o prazo de entrega",
                "rota": "http://127.0.0.1:3000/livros/{id}",
                "funcionamento": "retorna o livro de acordo com o id"
            }
        },

        Sobre: {
            "detalhes": "Você pode acompanhar o processo de loading pelo terminal!",
            "observações": "Alguns processos requerem muitas requests, alguns processos podem levar até 4 minutos para finalizar"
        }
    }

    res.send(model)
}


module.exports = start;