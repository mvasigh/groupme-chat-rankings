import React from 'react';
import { mount } from 'enzyme';
import Heading from '../Heading';

let wrapper;

afterEach(() => {
  wrapper.unmount();
});

it('renders with no props/content', () => {
  wrapper = mount(<Heading />);
  expect(wrapper.exists()).toEqual(true);
});

it('renders correct heading type', () => {
  wrapper = mount(<Heading type="title" />);
  expect(wrapper.childAt(0).hasClass('title')).toEqual(true);
});

it('renders the correct size', () => {
  const size = '6';
  wrapper = mount(<Heading size={size} />);
  expect(wrapper.childAt(0).hasClass(`is-${size}`)).toEqual(true);
});

it('renders the content passed in', () => {
  const content = 'hello world';
  wrapper = mount(<Heading>{content}</Heading>);
  expect(
    wrapper
      .childAt(0)
      .render()
      .text()
  ).toEqual(content);
});
