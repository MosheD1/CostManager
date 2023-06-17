import { Router } from "express";
import Cost from '../models/cost.js';

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

export default router;