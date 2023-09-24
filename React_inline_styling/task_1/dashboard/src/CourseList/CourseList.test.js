import React from 'react';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

describe('CourseList tests', () => {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<CourseList listCourses={listCourses}/>);
  })

  it('Test that CourseList renders without crashing', () => {
    expect(wrapper.exists());
  });

  it('Test that CourseListRow renders 5 different rows with listCourse', () => {
    const CourseListRowT = wrapper.find(CourseListRow);
    expect(CourseListRowT).toHaveLength(5);
  });

  it('Test that CourseList renders is correct without listCourse', () => {
    wrapper = shallow(<CourseList />);
    const CourseListRowT = wrapper.find(CourseListRow);
    expect(CourseListRowT).toHaveLength(3);
    expect(CourseListRowT.at(2).prop('textFirstCell')).toEqual('No course available yet');
  })
});
