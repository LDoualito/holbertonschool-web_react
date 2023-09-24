import React from 'react';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';

describe('CourseListRow tests', () => {
  let wrapper;

  it('Test that CourseListRow renders without crashing', () => {
    wrapper = shallow(<CourseListRow textFirstCell='Holberton'/>);
    expect(wrapper.exists()).toBe(true);
  });

  it('Test CourseListRow renders correct output when isHeader === true and textSecondCell does not exist', () => {
    wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='Holberton'/>);
    const th = wrapper.find('th');
    expect(th).toHaveLength(1);
    expect(th.prop('colSpan')).toEqual('2');
  });

  it('Test CourseListRow renders correct output when isHeader === true and textSecondCell exist', () => {
    wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='Holberton' textSecondCell='School'/>);
    const th = wrapper.find('th');
    expect(th).toHaveLength(2);
  });

  it('Test CourseListRow renders correct output when isHeader === false', () => {
    wrapper = shallow(<CourseListRow textFirstCell='Holberton'/>);
    const td = wrapper.find('td');
    expect(td).toHaveLength(2);
  });
});
