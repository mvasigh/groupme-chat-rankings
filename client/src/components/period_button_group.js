import React, { Component } from 'react';

class PeriodButtonGroup extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    // Lift state up to parent component (App) on click
    console.log('Click!');
  }

  render() {
    return (
      <div className="field has-addons">
        <p className="control" onClick={this.handleClick}>
          <button className="button" data-period="day">
            Daily
          </button>
        </p>
        <p className="control" onClick={this.handleClick}>
          <button className="button" data-period="week">
            Weekly
          </button>
        </p>
        <p className="control" onClick={this.handleClick}>
          <button className="button" data-period="month">
            Monthly
          </button>
        </p>
      </div>
    );
  }
}

export default PeriodButtonGroup;
