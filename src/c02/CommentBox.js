import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const comments = [
  {
    author: "Nate",
    connect: "Hello React! this is a Simaple comment. ",
  }, {
    author: "Kevin",
    connect: "Hello Redux!"
  }, {
    author: "Bood",
    connect: "Hello Rekit!"
  }
]
export default class CommentBox extends React.PureComponent {
  render () {
    return (
      <div className="comment-box">
        <h1> Comments {comments.length}</h1>
        <CommentList comments={comments} />
        <CommentForm />
      </div>
    )
  }
}