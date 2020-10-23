let lista = [];

function addContato(value) {
    lista.push(value)
}

function getContatos() {
    return lista;
}

module.exports = {'addContato':addContato,'getContatos':getContatos}