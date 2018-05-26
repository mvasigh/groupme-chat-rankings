import React, { Component } from 'react';
import RankList from './components/rank_list';

import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: []
    };
  }

  componentDidMount() {
    this.getRankings('month').then(response => {
      console.log(response.data);
      this.setState({ response: response.data });
    });
  }

  getRankings = async (period = 'week') => {
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
              <RankList rankings={this.state.response} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
