import { useState, useEffect, useCallback } from 'react';
import './App.css';
import debounce from 'lodash.debounce'; // Install lodash.debounce

function App() {
  const [animals, setAnimals] = useState([]);
  const [query, setQuery] = useState(''); // Define the query state

  useEffect(() => {
    const lastQuery = localStorage.getItem('lastQuery');
    if (lastQuery) {
      search(lastQuery);
    }
  }, []);

  const search = useCallback(debounce(async (q) => {
    try {
      const response = await fetch('https://react-projects-backe.vercel.app/?' + new URLSearchParams({ q }));
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAnimals(data);
      localStorage.setItem('lastQuery', q);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, 500), []);

  const handleInputChange = (e) => {
    const q = e.target.value;
    setQuery(q); // Update query state
    search(q);
  };

  return (
    <main>
      <h1>Animal Farm</h1>

      <input
        type="text"
        placeholder="Search"
        value={query} // Bind query state to input value
        onChange={handleInputChange}
      />

      <ul>
        {animals.map((animal) => (
          <Animal key={animal.id} {...animal} />
        ))}

        {animals.length === 0 && query && 'No animals found'}
      </ul>
    </main>
  );
}

function Animal({ type, name, age }) {
  return (
    <li>
      <strong>{type}</strong> {name} ({age} years old)
    </li>
  );
}

export default App;
