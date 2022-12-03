import { UsePockemonContext } from '../store/PockemonContext';

const PockemonFilter = () => {
  const pockemonCtx = UsePockemonContext();

  return (
    <input
      type='text'
      className='search-input'
      value={pockemonCtx?.state.filter}
      onChange={(e) =>
        pockemonCtx?.dispatch({ type: 'SET_FILTER', payload: e.target.value })
      }
    />
  );
};

export default PockemonFilter;
