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
      <div className="container mt-4">
        <RankList rankings={this.state.response} />
      </div>
    );
  }
}

export default App;
