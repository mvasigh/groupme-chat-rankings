import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageList from '../components/MessageList';
import Heading from '../components/Heading';
import * as actions from '../actions';

// container that holds data for children (messagelist)

class MessageRankings extends Component {
  componentDidMount() {
    this.props.getDayRankings();
  }

  render() {
    return (
      <div>
        <Heading type="subtitle" size={6}>
          This week's top messages
        </Heading>
      </div>
    );
  }
}

export default connect(
  ({ rankings }) => ({ rankings }),
  actions
)(MessageRankings);
