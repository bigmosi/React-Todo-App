import React, { Component } from 'react';

class InputTodo extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  /* eslint-disable react/prop-types */
  handleSubmit = (event) => {
    const { title } = this.state;
    const { addTodoItem } = this.props;
    event.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add Todo.."
          value={title}
          name="title"
          onChange={this.onChange}
          className="input-text"
        />
        <button type="submit" className="input-submit">Submit</button>
      </form>
    );
  }
}

export default InputTodo;
