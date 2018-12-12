import React from "react";
import { shallow } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SportsEvents} from "../app/components/eventsContainer";

Enzyme.configure({ adapter: new Adapter() });

describe('SportsEvents Component', () => {
  const setup = () => shallow(
    <SportsEvents/>
  );
    it('renders the SportsEvents Component', () => {
    const wrapper = setup();
    expect(wrapper.find('SportsEvents')).toBeDefined();
  });

});