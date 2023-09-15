import React from 'react';
import { shallow } from "enzyme";
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';


describe('React tests', () => {

  describe('isLoggedIn is false', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() }},
    ];

    let wrapper;
    
    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    it('test that App renders without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('test that App contain the Notifications component', () => {
      expect(wrapper.contains(<Notifications listNotifications={listNotifications}/>)).toBe(true);
    });

    it('test that App contain the Header component', () => {
      expect(wrapper.contains(<Header />)).toBe(true);
    });

    it('test that App contain the Login component', () => {
      expect(wrapper.contains(<Login />)).toBe(true);
    });

    it('test that App contain the Footer component', () => {
      expect(wrapper.contains(<Footer />)).toBe(true);
    });
  });

  describe('isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true}/>);

    it('Verify that Login component is not included', () => {
      expect(wrapper.contains(<Login />)).toBe(false);
    });

    it('Verify that CourseList component is included', () => {
      expect(wrapper.contains(<CourseList />));
    });
  });

  describe('calls logOut function with correct string', () => {
    const logOutMock = jest.fn();
    window.alert = jest.fn();
    shallow(<App logOut={logOutMock} />);
    const event = new KeyboardEvent('keydown',{
      key: 'h',
      ctrlKey: true,
    });
    document.dispatchEvent(event);
    expect(logOutMock).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
    jest.restoreAllMocks();
  });
});
