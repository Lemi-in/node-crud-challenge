const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');
const validatePerson = require('../middlewares/validatePerson');

router.get('/', personController.getPersons);
router.get('/:id', personController.getPerson);
router.post('/', validatePerson, personController.createPerson);
router.put('/:id', validatePerson, personController.updatePerson);
router.delete('/:id', personController.deletePerson);

module.exports = router;