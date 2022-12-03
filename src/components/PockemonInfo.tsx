import { UsePockemonContext } from '../store/PockemonContext';

function PockemonInfo() {
  const pockemonCtx = UsePockemonContext();

  return pockemonCtx?.state?.selectedPockenon ? (
    <div>
      <h4>{pockemonCtx?.state?.selectedPockenon.name.english}</h4>
      <table>
        <tbody>
          {Object.entries(pockemonCtx?.state?.selectedPockenon.base).map(
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
