import PockemonInfo from './components/PockemonInfo';
import PockemonFilter from './components/PockemonFilter';
import PockemonTable from './components/PockemonTable';
import { UsePockemonContext } from './store/PockemonContext';
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
  const pockemonCtx = UsePockemonContext();

  return (
    <div>
      <Title>Pokemon Search</Title>
      <PockemonFilter />
      <DoubleContainer>
        <PockemonTable />
        {pockemonCtx?.selectedPockenon && <PockemonInfo />}
      </DoubleContainer>
    </div>
  );
}

export default App;
