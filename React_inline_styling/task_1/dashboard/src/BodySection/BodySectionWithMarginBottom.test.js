import React from 'react';
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

describe('BodySectionWithMarginBottom tests', () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    let props = {
      title: 'title',
      children: 'test children node',
    };
    wrapper = shallow(<BodySectionWithMarginBottom {...props}/>)
  });

  it('Test that BodySectionWithMarginBottom renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Check that BodySectionWithMarginBottom renders a BodySection component with correct output', () => {
    const body = wrapper.find(BodySection);
    expect(body.prop('title')).toEqual('title');
    expect(body.prop('children')).toEqual('test children node');
  });
});
