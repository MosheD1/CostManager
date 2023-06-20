// Moshe Dego 315044511
// Peleg Vadbeker 209485838
// Eden Blau 208571927
const { Router } = require("express");
const Cost = require('../models/cost.js');

const router = Router();

router.get('/report', async (req, res) => {
    const { user_id, year, month } = req.query;
  
    try {
        const costs = await Cost.find({ user_id, year, month });
        const report = {

        };

        costs.forEach((cost) => {
            if(report[cost.category] === undefined) report[cost.category] = []
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