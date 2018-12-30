import React from 'react';
import {shallow} from 'enzyme';
import {CharacterDetails} from "./character-details.component";

describe("character-details", () => {
  it("renders correctly", () => {
    const component = shallow(<CharacterDetails
      name={"test-name"}
      url={"test-url.com"}
      height={"1337"}
      mass={"100"}
      eye_color="green"
      birth_year="1989"
    />);

    expect(component).toMatchSnapshot();
  });
});