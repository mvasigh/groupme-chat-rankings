import React, { Component } from 'react';
import moment from 'moment';
import Avatar from './Avatar';

class Message extends Component {
  state = {
    expanded: false
  };

  handleExpandReplies = () => {
    this.setState({ expanded: !this.state.expanded });
  };

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
        <div className="level-right">
          <div className="level-item">
            <a className="has-text-dark" onClick={this.handleExpandReplies}>
              {this.state.expanded ? 'Collapse replies' : 'Expand replies'}
            </a>
          </div>
        </div>
      </nav>
    );
  }

  renderReplyList() {
    const replies = this.props.replies.filter(reply => reply.score > 0);
    const { expanded } = this.state;

    if (!expanded) {
      return;
    }

    if (replies.length === 0) {
      return <span className="has-text-grey">(no scoring replies)</span>;
    }

    const replyListItems = replies.map((reply, i) => (
      <li style={i > 0 ? { marginTop: '6px' } : {}}>
        <span className="tag">+{reply.score}</span>
        <span style={{ marginLeft: '12px' }}>
          <small>{reply.text}</small>
        </span>
      </li>
    ));

    return <ul>{replyListItems}</ul>;
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
        {this.renderReplyList()}
      </div>
    );
  }
}

export default Message;
