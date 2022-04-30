import React from 'react';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      commentList: [],
    };
    this.updateComment = this.updateComment.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  updateComment(e) {
    this.setState({ comment: e.target.value });
  }

  addComment() {
    this.setState(({ comment, commentList }) => ({
      commentList: [...commentList, comment], comment: '',
    }));
  }

  render() {
    const { comment, commentList } = this.state;
    return (
      <div>
        <h1>Comente!</h1>
        <input
          data-testid="input-comment"
          onChange={ this.updateComment }
          value={ comment }
        />
        <button data-testid="button-comment" onClick={ this.addComment } type="submit">
          Add Comment!
        </button>
        <ul>
          {commentList.map((elem, index) => (
            <li key={ index }>{elem}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Comments;
