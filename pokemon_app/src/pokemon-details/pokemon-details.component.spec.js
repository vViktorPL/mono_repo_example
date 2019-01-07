import React from 'react';
import { shallow } from 'enzyme';
import { PokemonDetails } from './pokemon-details.component';

describe('pokemon-details', () => {
  it('renders correctly', () => {
    const component = shallow(
      <PokemonDetails
        name={'test-name'}
        id={123}
        types={[
          {
            type: {
              name: 'test-type',
            },
          },
        ]}
        sprites={{
          front_default: 'test.jpg',
        }}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
