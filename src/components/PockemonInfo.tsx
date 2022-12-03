import React from 'react'
import {Pockemon} from './PockemonRow/module'

interface PockemonInfoProps {
  pockemon: Pockemon
}

function PockemonInfo(props: PockemonInfoProps) {
  const {name, base} = props.pockemon
  return (
    <div>
      <h4>{name.english}</h4>
        <table >
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
  )
}

export default PockemonInfo