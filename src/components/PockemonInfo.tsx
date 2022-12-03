import { UsePockemonContext } from '../store/PockemonContext';

function PockemonInfo() {
  const pockemonCtx = UsePockemonContext();

  const { name, base } = pockemonCtx?.selectedPockenon!;
  return (
    <div>
      <h4>{name.english}</h4>
      <table>
        <tbody>
          {Object.entries(base).map(([key, value], i) => (
            <tr key={i}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PockemonInfo;
