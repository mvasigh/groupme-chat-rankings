import React, { Component } from 'react';
import Section from './components/Section';
import Heading from './components/Heading';
import Columns from './components/Columns';
import Column from './components/Column';
import MessageRankings from './containers/MessageRankings';

class App extends Component {
  render() {
    return (
      <Section>
        <Columns>
          <Column size="6 is-offset-3">
            <Heading type="title" size={4}>
              Good Ole... Rankings
            </Heading>
            <Heading type="subtitle" size={6}>
              See all the ranks
            </Heading>
            <MessageRankings />
          </Column>
        </Columns>
      </Section>
    );
  }
}

export default App;
