import express from "express";
import Cost from './models/cost';

const app = express();

app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/addcost', async (req, res) => {
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

app.get('/report', async (req, res) => {
    const { user_id, year, month } = req.query;
  
    try {
        const costs = Cost.find({ user_id, year, month });
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

app.get('/about', (req, res) => {
    const developers = [
      { firstname: 'Moshe', lastname: 'Dego', id: 315044511, email: 'moshedego@gmail.com' },
      { firstname: 'Peleg', lastname: 'Vadbeker', id: 209485838, email: 'Peleg40@gmail.com' },
      { firstname: 'Eden', lastname: 'Blau', id: 208571927, email: 'Eden4129@gmail.com' }
    ];
  
    res.json(developers);
});

app.listen(3000, () => {
    console.log('server is up and running');
});