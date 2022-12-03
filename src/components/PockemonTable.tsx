import PockemonRow from './PockemonRow';
import { UsePockemonContext } from '../store/PockemonContext';

function PockemonTable() {
  const pockemonCtx = UsePockemonContext();

  const filteredPockemons = pockemonCtx?.state.pockemons
    .slice(0, 30)
    .filter((item) =>
      item.name.english
        .toLowerCase()
        .includes(pockemonCtx?.state.filter.toLowerCase())
    );

  return (
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
        {filteredPockemons?.map((p) => (
          <PockemonRow
            key={p.id}
            pockemon={p}
            onSelect={() =>
              pockemonCtx?.dispatch({
                type: 'SET_SELECTED_POCKEMON',
                payload: p,
              })
            }
          />
        ))}
      </tbody>
    </table>
  );
}

export default PockemonTable;
