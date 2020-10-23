function contatoPost(req,res,next){
    console.log(req.body)
    res.send(req.body);
}

function contatoGet(req,res) {
    res.render('contato', {title:"Elisa's"});
}

module.exports = {
    'contatoGet':contatoGet,
    'contatoPost':contatoPost}