import React, { Component } from 'react';
import moment from 'moment';
import Avatar from './Avatar';

class Message extends Component {
  renderBottomBar() {
    const { favorited_by } = this.props;
    const likes = favorited_by.length;

    return (
      <nav className="level">
        <div className="level-left">
          <div className="level-item">
            <span className="has-text-danger">{`${likes} like${
              likes > 1 ? 's' : ''
            }`}</span>
          </div>
        </div>
      </nav>
    );
  }

  render() {
    const {
      name,
      text,
      avatar_url,
      created_at,
      favorited_by,
      attachments,
      score
    } = this.props;
    const createdAtMoment = moment.unix(created_at);

    return (
      <div className="box">
        <article className="media">
          <figure className="media-left">
            <Avatar img={avatar_url} />
          </figure>
          <div className="media-content">
            <div className="content">
              <span className="tag is-pulled-right is-dark">+{score}</span>
              <p>
                <div style={{ paddingBottom: '12px' }}>
                  <strong>{name}</strong>{' '}
                  <small>{createdAtMoment.fromNow()}</small>
                </div>
                {text ? text : <span className="has-text-grey">(no text)</span>}
              </p>
            </div>
            {attachments.length > 0 ? (
              <span className="tag">
                <a className="has-text-dark" href={attachments[0].url}>
                  View attachment
                </a>
              </span>
            ) : (
              ''
            )}
          </div>
        </article>
        <hr style={{ marginBottom: '16px' }} />
        {this.renderBottomBar()}
      </div>
    );
  }
}

export default Message;
