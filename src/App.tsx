import PockemonInfo from './components/PockemonInfo';
import PockemonFilter from './components/PockemonFilter';
import PockemonTable from './components/PockemonTable';
import styled from 'styled-components';
import './App.css';

const DoubleContainer = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 70% 30%;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 2rem;
  font-size: x-large;
`;

function App() {
  return (
    <div>
      <Title>Pokemon Search</Title>
      <PockemonFilter />
      <DoubleContainer>
        <PockemonTable />
        <PockemonInfo />
      </DoubleContainer>
    </div>
  );
}

export default App;
