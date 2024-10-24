const validatePerson = (req, res, next) => {
    const { name, age, hobbies } = req.body;
    if (!name || typeof name !== 'string') {
      return res.status(400).json({ message: 'Name is required and must be a string' });
    }
    if (age === undefined || typeof age !== 'number') {
      return res.status(400).json({ message: 'Age is required and must be a number' });
    }
    if (!Array.isArray(hobbies)) {
      return res.status(400).json({ message: 'Hobbies must be an array' });
    }
    next();
  };
  
  module.exports = validatePerson;
  