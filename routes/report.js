// Moshe Dego 315044511
// Peleg Vadbeker 209485838
// Eden Blau 208571927
const { Router } = require("express");
const Cost = require('../models/costs.js');
const User = require('../models/users.js');

const router = Router();

router.get('/report', async (req, res) => {
    const { user_id, year, month } = req.query;

    if(!user_id || !year || !month) {
        res.status(400).json('Missing details');
        return;
    }
  
    try {
        const user = await User.find({ user_id });

        if(!user) {
            res.status(400).json('user doesn\'t exists');
            return;
        }

        const costs = await Cost.find({ user_id, year, month });
        const report = {
            food: [],
            health:[],
            housing:[],
            sport:[],
            education:[],
            transportation:[],  
            other:[]
        };

        costs.forEach((cost) => {
            report[cost.category].push({
              day: cost.day,
              description: cost.description,
              sum: cost.sum,
            });
        });

        res.json(report);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get report' });   
    }
});

module.exports = router;