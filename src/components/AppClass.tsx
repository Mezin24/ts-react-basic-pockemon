import { Component } from 'react';
import { Pockemon } from './PockemonRow/module';
import PockemonRow from './PockemonRow/index';
import PockemonInfo from './PockemonInfo';
import styled from 'styled-components';

interface AppClassState {
  pockemons: Pockemon[];
  filter: string;
  selectedPockemon: Pockemon | null;
}

const DoubleContainer = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 70% 30%;
`;

class AppClass extends Component {
  state: AppClassState = {
    pockemons: [],
    filter: '',
    selectedPockemon: null,
  };

  componentDidMount(): void {
    fetch('http://localhost:3004/pockemons')
      .then((res) => res.json())
      .then((pockemons) => this.setState({ ...this.state, pockemons }));
  }

  selectPockemonHandler = (id: number) => {
    const selectedPockemon = this.state.pockemons.find(
      (item) => item.id === id
    )!;
    this.setState({ ...this.state, selectedPockemon });
  };

  render() {
    const { pockemons, filter, selectedPockemon } = this.state;
    const filteredPockemons = pockemons
      .slice(0, 30)
      .filter((item) =>
        item.name.english.toLowerCase().includes(filter.toLowerCase())
      );

    return (
      <div>
        <h1
          className='title'
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            fontSize: 'x-large',
          }}
        >
          Pokemon Search
        </h1>
        <input
          type='text'
          className='search-input'
          value={filter}
          onChange={(e) =>
            this.setState({ ...this.state, filter: e.target.value })
          }
        />
        <DoubleContainer>
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
              {filteredPockemons.length > 0 &&
                filteredPockemons.map((p) => (
                  <PockemonRow
                    key={p.id}
                    pockemon={p}
                    onSelect={this.selectPockemonHandler}
                  />
                ))}
            </tbody>
          </table>
          {selectedPockemon && <PockemonInfo pockemon={selectedPockemon} />}
        </DoubleContainer>
      </div>
    );
  }
}

export default AppClass;
