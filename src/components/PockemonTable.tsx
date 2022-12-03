import PockemonRow from './PockemonRow';
import { UsePockemonContext } from '../store/PockemonContext';

function PockemonTable() {
  const pockemonCtx = UsePockemonContext();

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
        {pockemonCtx?.filteredPockemons.map((p) => (
          <PockemonRow
            key={p.id}
            pockemon={p}
            onSelect={pockemonCtx.selectPockemonHandler}
          />
        ))}
      </tbody>
    </table>
  );
}

export default PockemonTable;
