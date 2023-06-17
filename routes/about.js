import { Router } from "express";

const router = Router();

router.get('/about', (req, res) => {
    const developers = [
      { firstname: 'Moshe', lastname: 'Dego', id: 315044511, email: 'moshedego@gmail.com' },
      { firstname: 'Peleg', lastname: 'Vadbeker', id: 209485838, email: 'Peleg40@gmail.com' },
      { firstname: 'Eden', lastname: 'Blau', id: 208571927, email: 'Eden4129@gmail.com' }
    ];
  
    res.json(developers);
});

export default router;