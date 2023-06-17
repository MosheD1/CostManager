// Moshe Dego 315044511
// Peleg Vadbeker 209485838
// Eden Blau 208571927
const { Router } = require("express");
const Cost = require('../models/cost.js');

const router = Router();

router.post('/addcost', async (req, res) => {
    const { 
        user_id, 
        year, 
        month, 
        day, 
        description, 
        category, 
        sum 
    } = req.body;
  
    const cost = new Cost({
      user_id,
      year,
      month,
      day,
      description,
      category,
      sum,
    });
  
    try {
        const savedCost = await cost.save()
        res.json(savedCost);
    } catch (error) {
        res.status(500).json("failed to add cost");
    }
});

module.exports = router;