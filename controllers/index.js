let lista = [
    {path:'images/cupcake.jpg',name:'Cupcake'},
    {path:'images/cupcake.jpg',name:'Cupcake'},
    {path:'images/cupcake.jpg',name:'Cupcake'},
    {path:'images/cupcake.jpg',name:'Cupcake'},
    {path:'images/cupcake.jpg',name:'Cupcake'},
    {path:'images/cupcake.jpg',name:'Cupcake'},
    {path:'images/cupcake.jpg',name:'Cupcake'},
    {path:'images/cupcake.jpg',name:'Cupcake'}
];

const retornaProdutos = (req,res) => {
    res.render('index', {produtos:lista,title:'Elisa\'s'})
}


module.exports = retornaProdutos;