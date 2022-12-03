import { UsePockemonContext } from '../store/PockemonContext';

function PockemonInfo() {
  const pockemonCtx = UsePockemonContext();

  // const { name, base } = pockemonCtx?.selectedPockenon!;
  return pockemonCtx?.selectedPockenon ? (
    <div>
      <h4>{pockemonCtx?.selectedPockenon.name.english}</h4>
      <table>
        <tbody>
          {Object.entries(pockemonCtx?.selectedPockenon.base).map(
            ([key, value], i) => (
              <tr key={i}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  ) : null;
}

export default PockemonInfo;
