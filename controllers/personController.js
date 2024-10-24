const personModel = require('../models/personModel');

const getPersons = (req, res) => {
    const persons = personModel.getAllPersons();
    res.status(200).json(persons);
}

const getPerson = (req, res) => {
    const person = personModel.getPersonById(req.params.id);
    if(!person){
        return res.status(404).json({message: 'The person you are trying to get does not exist'});
    }
    res.status(200).json(person);
}

const createPerson = (req , res) => {
    const {name, age, hobbies} = req.body;
    const newPerson = personModel.createPerson(name, age, hobbies);
    res.status(200).json(newPerson);
}

const updatePerson = (req, res) => {
    const {name, age, hobbies} = req.body;
    const updatedPerson = personModel.updatePerson(req.params.id, name, age, hobbies);
    if (!updatedPerson){
        return res.status(404).json({message: 'The person you are trying to update does not exist'});
    }
    return res.status(200).json(updatedPerson);
}

const deletePerson = (req, res) => {
    const deletedPerson = personModel.deletePerson(req.params.id);
    if(!deletedPerson){
        return res.status(404).json({message: 'The person you are trying to delete does not exist'});
    }
    return res.status(200).json(deletedPerson);
    
}

module.exports = { getPersons, getPerson, createPerson, updatePerson, deletePerson };