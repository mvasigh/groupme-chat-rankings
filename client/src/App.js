import React, { Component } from 'react';
import Section from './components/Section';
import Heading from './components/Heading';
import MessageRankings from './containers/MessageRankings';

class App extends Component {
  render() {
    return (
      <Section>
        <Heading type="title" size={4}>
          Good Ole... Rankings
        </Heading>
        <Heading type="subtitle" size={6}>
          See all the ranks
        </Heading>
        <MessageRankings />
      </Section>
    );
  }
}

export default App;
