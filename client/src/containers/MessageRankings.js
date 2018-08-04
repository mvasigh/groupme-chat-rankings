import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageList from '../components/MessageList';
import Heading from '../components/Heading';
import * as actions from '../actions';
import ButtonSelectGroup from '../components/ButtonSelectGroup';

class MessageRankings extends Component {
  componentDidMount() {
    this.props.getRankings(this.props.period);
  }

  renderPeriodFilter() {
    const options = ['day', 'week', 'month'];

    return (
      <div className="level">
        <div className="level-item">
          <ButtonSelectGroup
            options={options}
            active={this.props.period}
            onSelect={this.handleFilterSelect}
          />
        </div>
      </div>
    );
  }

  handleFilterSelect = period => {
    this.props.filterPeriod(period);
    this.props.getRankings(period);
  };

  getMessageList() {
    const rankings = this.props.rankings[this.props.period] || [];
    return rankings.map(entry => {
      const { message, score } = entry;
      return { ...message, score };
    });
  }

  render() {
    return (
      <div>
        <Heading type="subtitle" size={6}>
          This {this.props.period}'s top messages
        </Heading>
        {this.renderPeriodFilter()}
        <MessageList messages={this.getMessageList()} />
      </div>
    );
  }
}

export default connect(
  ({ rankings, period }) => ({ rankings, period }),
  actions
)(MessageRankings);
