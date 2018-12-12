import React from "react";
import { shallow } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {EventsList} from "../app/components/eventsList";

Enzyme.configure({ adapter: new Adapter() });
const matchData = {id : 1};
describe('EventsList Component', () => {
  const setup = () => shallow(
    <EventsList matchData={matchData}/>
  );
    it('renders the EventsList Component', () => {
    const wrapper = setup();
    expect(wrapper.find('EventsList')).toBeDefined();
  });

});