import React from 'react';
import { expect } from '@jest/globals';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from './utils'; // Ensure this is correctly imported

describe('<Notifications />', () => {
  // Test that the Notifications component renders without crashing
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  // Test that Notifications renders three list items
  it('renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    const listItems = wrapper.find('ul').children();
    expect(listItems.length).toBe(3);
  });

  // Test that Notifications renders the text "Here is the list of notifications"
  it('renders the correct text', () => {
    const wrapper = shallow(<Notifications />);
    const paragraph = wrapper.find('p');
    expect(paragraph.text()).toBe('Here is the list of notifications');
  });
});
