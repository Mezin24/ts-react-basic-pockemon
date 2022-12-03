import { useState, useEffect } from 'react';
import PockemonRow from './components/PockemonRow';
import PockemonInfo from './components/PockemonInfo';
import { Pockemon } from './components/PockemonRow/module';
import styled from 'styled-components';
import './App.css';

const DoubleContainer = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 70% 30%;
`

function App() {
  const [pockemons, setPockemons] = useState<Pockemon[]>([]);
  const [filter, setFilter] = useState('');
  const [selectedPockenon, setSelectedPockenon] = useState<Pockemon | null>(
    null
  );

  useEffect(() => {
    fetch('http://localhost:5500/pockemons')
      .then(res => res.json())
      .then(data => setPockemons(data))
  }, []);

  const filteredPockemons = pockemons
    .slice(0, 30)
    .filter((item) =>
      item.name.english.toLowerCase().includes(filter.toLowerCase())
    );

  const selectPockemonHandler = (id: number) => {
    const selectedPockemon = filteredPockemons.find((item) => item.id === id)!;
    setSelectedPockenon(selectedPockemon);
  };

  return (
    <div>
      <h1
        className='title'
        style={{
          textAlign: 'center',
          marginTop: '2rem',
          fontSize: 'x-large',
        }}
      >
        Pokemon Search
      </h1>
      <input
        type='text'
        className='search-input'
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <DoubleContainer>
        <table
          style={{
            width: '100%',
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {filteredPockemons.length > 0 &&
              filteredPockemons.map((p) => (
                <PockemonRow
                  key={p.id}
                  pockemon={p}
                  onSelect={selectPockemonHandler}
                />
              ))}
          </tbody>
        </table>
        {selectedPockenon && <PockemonInfo pockemon={selectedPockenon} />}
      </DoubleContainer>
    </div>
  );
}

export default App;
