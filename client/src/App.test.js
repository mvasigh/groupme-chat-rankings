import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import MessageRankings from './containers/MessageRankings';
import Heading from './components/Heading';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('renders the message rankings', () => {
  expect(wrapped.find(MessageRankings).length).toEqual(1);
});

it('renders the title', () => {
  expect(wrapped.find('[type="title"]').length).toEqual(1);
});

it('renders the subtitle', () => {
  expect(wrapped.find('[type="subtitle"]').length).toEqual(1);
});
