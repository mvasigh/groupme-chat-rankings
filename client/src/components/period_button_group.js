import React, { Component } from 'react';

class PeriodButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // Lift state up to parent component (App) on click
    const period = e.target.attributes['data-period'].value;
    this.props.onPeriodChange(period);
  }

  render() {
    return (
      <div className="field has-addons">
        <p className="control" onClick={this.handleClick}>
          <button
            className={
              'button ' + (this.props.period == 'day' ? 'is-link' : '')
            }
            onClick={this.handleClick}
            data-period="day"
          >
            Daily
          </button>
        </p>
        <p className="control" onClick={this.handleClick}>
          <button
            className={
              'button ' + (this.props.period == 'week' ? 'is-link' : '')
            }
            onClick={this.handleClick}
            data-period="week"
          >
            Weekly
          </button>
        </p>
        <p className="control" onClick={this.handleClick}>
          <button
            className={
              'button ' + (this.props.period == 'month' ? 'is-link' : '')
            }
            onClick={this.handleClick}
            data-period="month"
          >
            Monthly
          </button>
        </p>
      </div>
    );
  }
}

export default PeriodButtonGroup;
