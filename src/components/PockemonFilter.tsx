import { UsePockemonContext } from '../store/PockemonContext';

const PockemonFilter = () => {
  const pockemonCtx = UsePockemonContext();

  return (
    <input
      type='text'
      className='search-input'
      value={pockemonCtx?.filter}
      onChange={(e) => pockemonCtx?.setFilter(e.target.value)}
    />
  );
};

export default PockemonFilter;
