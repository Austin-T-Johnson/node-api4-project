let id = 0;

function getId() {
    return ++id
}

const users = [
    { id: getId(), name: 'Frodo Baggins' },
    { id: getId(), name: 'Samwise Gamgee' },
    { id: getId(), name: 'Meriadoc Brandybuck' },
    { id: getId(), name: 'Peregrin Took' },
    { id: getId(), name: 'Mithrandir' },
    { id: getId(), name: 'Boromir' },
    { id: getId(), name: 'Legolas' },
    { id: getId(), name: 'Gimli' },
    { id: getId(), name: 'Aragorn' },
  ];
  
  module.exports = {

    async findAll() {
        return users
    },

    async findById(id) {
        const user = users.find(u => u.id == id)
        return user
    },









  }