const lista = require('../Model/produtos')

const retornaProdutos = (req,res) => {
    res.render('index', {produtos:lista,title:'Elisa\'s'})
}


module.exports = retornaProdutos;