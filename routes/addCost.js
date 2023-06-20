// Moshe Dego 315044511
// Peleg Vadbeker 209485838
// Eden Blau 208571927
const { Router } = require("express");
const Cost = require('../models/costs.js');
const User = require('../models/users.js');
const categories = require('../constants/categories.js');

const router = Router();

//add route for add cost
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

     //check for missing details
    if(!user_id || 
        !year ||
        !month || 
        !day || 
        !description || 
        !category || 
        !sum
    ) {
        res.status(400).json('Missing details');
        return;
    }

    //check for existing categories
    if(!categories.includes(category)) {
        res.status(400).json('category doesn\'t exist');
        return;
    }

    try {
        const user = await User.findOne({ id: user_id });
        //check for exisint user
        if(!user) {
            res.status(400).json('user doesn\'t exists');
            return;
        }
    
        const cost = new Cost({
        user_id,
        year,
        month,
        day,
        description,
        category,
        sum,
        });

        //add new cost
        const savedCost = await cost.save()
        res.json(savedCost);
    } catch (error) {
        res.status(500).json("failed to add cost");
    }
});

module.exports = router;