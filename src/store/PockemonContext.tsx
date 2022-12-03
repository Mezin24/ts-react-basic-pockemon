import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { Pockemon } from '../components/PockemonRow/module';

interface PockemonContextInterface {
  filter: string;
  selectedPockenon: Pockemon | null;
  filteredPockemons: Pockemon[];
  setFilter: (str: string) => void;
  setPockemons: (pockemons: Pockemon[]) => void;
  selectPockemonHandler: (id: number) => void;
}

interface PockemonContextProviderProps {
  children: ReactNode;
}

export const PockemonContext = createContext<PockemonContextInterface | null>(
  null
);

export const PockemonContextProvider = ({
  children,
}: PockemonContextProviderProps) => {
  const [pockemons, setPockemons] = useState<Pockemon[]>([]);
  const [filter, setFilter] = useState('');
  const [selectedPockenon, setSelectedPockenon] = useState<Pockemon | null>(
    null
  );

  useEffect(() => {
    fetch('http://localhost:3004/pockemons')
      .then((res) => res.json())
      .then((data) => setPockemons(data));
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

  const sampleAppContext: PockemonContextInterface = {
    filteredPockemons,
    selectedPockenon,
    filter,
    setPockemons,
    setFilter,
    selectPockemonHandler,
  };

  return (
    <PockemonContext.Provider value={sampleAppContext}>
      {children}
    </PockemonContext.Provider>
  );
};

export const UsePockemonContext = () =>
  useContext<PockemonContextInterface | null>(PockemonContext);
