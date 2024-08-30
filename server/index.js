import express from 'express';
import cors from 'cors';
import Chance from 'chance';

const app = express();
app.use(cors());
app.use(express.json());

const chance = new Chance();

const animals = [...Array(250).keys()].map(id => ({
    id,
    type: chance.animal(),
    age: chance.age(),
    name: chance.name(),
}));

app.get('/', (req, res) => {
    try {
        const q = req.query.q?.toLowerCase() || '';
        const result = animals.filter(animal => animal.type.toLowerCase().includes(q));
        res.json(result); // Ensure JSON response
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(() => console.log('Listening on port http://localhost:5500/'));
