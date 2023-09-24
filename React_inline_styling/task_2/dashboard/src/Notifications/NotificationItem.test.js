import React from 'react';
import { shallow } from "enzyme";
import NotificationItem from './NotificationItem';


describe('NotificationItem tests', () => {
 it('test that NotificationItem renders without crashing', () => {
  const wrapper = shallow(<NotificationItem />);
  expect(wrapper.exists()).toBe(true);
 });

 it ('verify that NotificationItem renders the correct props', () => {
  const wrapper = shallow(<NotificationItem type="default" value="test"/>);
  const li = wrapper.find('li');
  expect(li).toHaveLength(1);
  expect(li.prop('data-notification-type')).toEqual('default');
  expect(li.text()).toEqual('test');
 });

 it ('verify that NotificationItem renders the correct html', () => {
  const wrapper = shallow(<NotificationItem html={{__html: '<u>test</u>'}} />);
  const li = wrapper.find('li');
  expect(li).toHaveLength(1);
  expect(li.html()).toMatch(/<li class="default_*/);
 });

 it('verifiy that markAsRead is called with right message', () => {
  const id = 1
  const wrapper =shallow(<NotificationItem id={id} markAsRead={(id) => {console.log(`Notification ${id} has been marked as read`)}}/>);
  const consoleLogSpy = jest.spyOn(console, 'log');
  wrapper.find('li').simulate('click')
  expect(consoleLogSpy).toHaveBeenCalledWith(`Notification ${id} has been marked as read`);
  jest.restoreAllMocks();
 })
})
