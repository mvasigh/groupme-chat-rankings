import React, { Component } from 'react';
import RankList from './components/rank_list';
import PeriodButtonGroup from './components/period_button_group';

import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // 'period' will be lifted up from child component
    this.state = {
      response: [],
      period: 'month'
    };
  }

  componentDidMount() {
    this.getRankings('month').then(response => {
      console.log(response.data);
      this.setState({ response: response.data });
    });
  }

  getRankings = async (period = this.state.period) => {
    return await axios.get(`/api/rankings?period=${period}`);
  };

  render() {
    return (
      <section className="section is-primary is-bold">
        <div className="container-fluid">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <h1 className="title has-text-centered has-text-white">
                Good Ole... Rankings
              </h1>
              <div className="level">
                <div className="level-item">
                  <PeriodButtonGroup />
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
