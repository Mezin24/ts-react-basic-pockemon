import Button from '@mui/material/Button';
import { Pockemon } from './module';

interface PockemonRowProps {
  pockemon: Pockemon;
  onSelect: () => void;
}

function PockemonRow(props: PockemonRowProps) {
  const { id, name, type } = props.pockemon;
  return (
    <tr key={id}>
      <td>{name.english}</td>
      <td>{type.join(', ')}</td>
      <td>
        <Button
          variant='contained'
          style={{ cursor: 'pointer' }}
          onClick={() => props.onSelect()}
        >
          Select
        </Button>
      </td>
    </tr>
  );
}

export default PockemonRow;
