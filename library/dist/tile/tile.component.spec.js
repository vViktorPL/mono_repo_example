import React from 'react';
import { shallow } from 'enzyme';
import { Tile } from './tile.component';
describe('tile', function () {
  it('renders properly', function () {
    var onClick = jest.fn();
    var component = shallow(React.createElement(Tile, {
      name: 'test-name',
      url: 'test-url.com',
      className: 'test-class',
      onClick: onClick
    })).find('div');
    expect(component.props().className).toBe('test-class');
    expect(component.text()).toBe('test-name');
  });
  it('calls on onclick with passed url', function () {
    var onClick = jest.fn();
    var component = shallow(React.createElement(Tile, {
      name: 'test-name',
      url: 'test-url.com',
      className: 'test-class',
      onClick: onClick
    }));
    component.simulate('click');
    expect(onClick).toBeCalledWith('test-url.com');
  });
});