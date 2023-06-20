// Moshe Dego 315044511
// Peleg Vadbeker 209485838
// Eden Blau 208571927
const { Router } = require("express");

const router = Router();

//add about route
router.get('/about', (req, res) => {
    const developers = [
      { firstname: 'Moshe', lastname: 'Dego', id: 315044511, email: 'moshedego@gmail.com' },
      { firstname: 'Peleg', lastname: 'Vadbeker', id: 209485838, email: 'Peleg40@gmail.com' },
      { firstname: 'Eden', lastname: 'Blau', id: 208571927, email: 'Eden4129@gmail.com' }
    ];
  
    res.json(developers);
});

module.exports = router;