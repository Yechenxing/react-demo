import React from "react";
import PropTypes from "prop-types";
export default class CommentItem extends React.PureComponent {
  static propTypes = {
    comment: PropTypes.object.isRequired
  };
  render () {
    const { author, connect } = this.props.comment;
    return (
      <div className="comment-item">
        <span className="avatar" />
        <a href="www.baidu.com">{author}</a>
        <p>{connect}</p>
      </div>
    )
  }
}