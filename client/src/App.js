import React, { Component } from 'react';
import RankList from './components/rank_list';
import PeriodButtonGroup from './components/period_button_group';

import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handlePeriodChange = this.handlePeriodChange.bind(this);

    // 'period' will be lifted up from child component
    this.state = {
      response: [],
      period: 'week'
    };
  }

  componentDidMount() {
    this.getRankings(this.state.period).then(response => {
      console.log(response.data);
      this.setState({ response: response.data });
    });
  }

  handlePeriodChange(period) {
    this.setState({ period });
    this.getRankings(period).then(response =>
      this.setState({ response: response.data })
    );
  }

  getRankings = async (period = this.state.period) => {
    return await axios.get(`/api/rankings?period=${period}`);
  };

  render() {
    return (
      <section className="section has-background-grey-dark">
        <div className="container-fluid">
          <div className="columns">
            <div className="column is-one-third is-offset-one-third">
              <p className="title has-text-centered has-text-white">
                Good Ole... Rankings
              </p>
              <p className="subtitle has-text-centered has-text-white">
                This {this.state.period}'s top messages
              </p>
              <div className="level">
                <div className="level-item">
                  <PeriodButtonGroup
                    period={this.state.period}
                    onPeriodChange={this.handlePeriodChange}
                  />
                </div>
              </div>
              <RankList rankings={this.state.response} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
