import React from "react";
export default class CommentForm extends React.PureComponent {
  render () {
    return (
      <div className="comment-form">
        <form onSubmit={evt => evt.preventDefault()}>
          <textarea style={{ display: "block", width: '100%' }}></textarea>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}