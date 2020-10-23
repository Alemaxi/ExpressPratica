const listaContato = require('../Model/contato')

function contatoPost(req,res,next){
    listaContato.addContato(req.body);
    res.send(listaContato.getContatos());
}

function contatoGet(req,res) {
    res.render('contato', {title:"Elisa's"});
}

module.exports = {
    'contatoGet':contatoGet,
    'contatoPost':contatoPost}