import React from 'react';
import { shallow } from "enzyme";
import Notifications from './Notifications';


describe('React tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

 it('test that Notifications renders without crashing', () => {
  expect(wrapper.exists()).toBe(true);
 });

 it ('verify that Notifications renders three list items', () => {
  expect(wrapper.find('li')).toHaveLength(3);
 });

 it ('verify that Notifications renders the text', () => {
  expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
 });
})
