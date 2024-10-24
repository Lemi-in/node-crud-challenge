const {v4: uuidv4} = require('uuid');


let persons = [
    {
        id: '1',
        name: 'sam',
        age: 26,
        hobbies: ['reading', 'coding']
    }
];

const getAllPersons = () => persons;

const getPersonById = (id) => persons.find(p => p.id === id);

const createPerson = (name, age, hobbies) => {
    const newPerson = { id: uuidv4() , name, age, hobbies};
    persons.push(newPerson);
    return newPerson;

};

const updatePerson = (id, name, age, hobbies) => {
    const idx = persons.findIndex(p => p.id == id);
    if (idx !== -1) {
        persons[idx] = { id, name, age, hobbies }; 
        return persons[idx];
    }
    return null;
};


const deletePerson = (id) => {
    const idx = persons.findIndex(p => p.id === id);
    if(idx !== -1){
        return persons.splice(idx, 1);
    }
    return null;
}

module.exports = { persons, getAllPersons, getPersonById, createPerson, updatePerson, deletePerson };