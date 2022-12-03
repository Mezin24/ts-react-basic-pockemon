import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useReducer,
} from 'react';
import { Pockemon } from '../components/PockemonRow/module';

interface PockemonContextInterface {
  state: PockemonState;
  dispatch: (action: ACTIONTYPE) => void;
}

interface PockemonState {
  pockemons: Pockemon[];
  filter: string;
  selectedPockenon: Pockemon | null;
}

interface PockemonContextProviderProps {
  children: ReactNode;
}

const initialState: PockemonState = {
  pockemons: [],
  filter: '',
  selectedPockenon: null,
};

type ACTIONTYPE =
  | { type: 'SET_POCKEMONS'; payload: Pockemon[] }
  | { type: 'SET_FILTER'; payload: string }
  | { type: 'SET_SELECTED_POCKEMON'; payload: Pockemon };

const pockemonReducer = (state: PockemonState, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    case 'SET_POCKEMONS':
      return { ...state, pockemons: action.payload };
    case 'SET_SELECTED_POCKEMON':
      return { ...state, selectedPockenon: action.payload };
    default:
      throw new Error('Bad action');
  }
};

export const PockemonContext = createContext<PockemonContextInterface | null>(
  null
);

export const PockemonContextProvider = ({
  children,
}: PockemonContextProviderProps) => {
  const [state, dispatch] = useReducer(pockemonReducer, initialState);

  useEffect(() => {
    fetch('http://localhost:3000/pockemon.json')
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: 'SET_POCKEMONS', payload: data.pockemons })
      );
  }, []);

  const sampleAppContext: PockemonContextInterface = {
    state,
    dispatch,
  };

  return (
    <PockemonContext.Provider value={sampleAppContext}>
      {children}
    </PockemonContext.Provider>
  );
};

export const UsePockemonContext = () =>
  useContext<PockemonContextInterface | null>(PockemonContext);
