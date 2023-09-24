import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Login tests', () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Login />);
  });

  it('Test that Login renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Verify that Login render 2 label tags and 2 input tags', () => {
    expect(wrapper.find('label')).toHaveLength(2);
    expect(wrapper.find('input')).toHaveLength(2);
  });
});
