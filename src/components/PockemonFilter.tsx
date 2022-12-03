interface PockemonFilterProps {
  filter: string;
  setFilter: (str: string) => void;
}

const PockemonFilter = ({ filter, setFilter }: PockemonFilterProps) => {
  return (
    <input
      type='text'
      className='search-input'
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default PockemonFilter;
