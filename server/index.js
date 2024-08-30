import express from 'express';
import cors from 'cors';

/* Initialize the express app */
const app = express();
app.use(cors());
app.use(express.json());

// Create fake data using 'chance' and store it in an array
import Chance from 'chance';
const chance = new Chance();

const animals = [...Array(250).keys()].map(id => ({
    id,
    type: chance.animal(),
    age: chance.age(),
    name: chance.name(),
}));

// Creating HTTP endpoint
app.get('/', (req, res) => {  // Ensure the path is '/'
    // Filter result by query
    const q = req.query.q?.toLowerCase() || '';
    const result = animals.filter(animal => animal.type.toLowerCase().includes(q));

    res.send(result);   // Send the filtered results
});

// Start the server on port 5500
app.listen(5500, () => console.log('Listening on port http://localhost:5500/'));
