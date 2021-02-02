import React from "react";
import CommentItem from "./CommentItem";
import PropTypes from "prop-types";
import "./CommentBox.css";
export default class CommentList extends React.PureComponent {
  static propTypes = {
    comments: PropTypes.array.isRequired
  };
  render () {
    return (
      <div className="comment-list">
        {this.props.comments.map((comment, index) => (
          <CommentItem key={index} comment={comment} />
        ))}
      </div>
    )
  }
}