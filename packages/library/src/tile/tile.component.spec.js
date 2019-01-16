import React from 'react';
import { shallow } from 'enzyme';
import { Tile } from './tile.component';

describe('tile', () => {
  it('renders properly', () => {
    const onClick = jest.fn();
    const component = shallow(
      <Tile name={'test-name'} url={'test-url.com'} className={'test-class'} onClick={onClick} />
    ).find('div');

    expect(component.props().className).toBe('test-class');
    expect(component.text()).toBe('test-name');
  });

  it('calls on onclick with passed url', () => {
    const onClick = jest.fn();
    const component = shallow(
      <Tile name={'test-name'} url={'test-url.com'} className={'test-class'} onClick={onClick} />
    );

    component.simulate('click');
    expect(onClick).toBeCalledWith('test-url.com');
  });
});
