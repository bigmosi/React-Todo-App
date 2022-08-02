import React from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';

/* eslint-disable react/prop-types */

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  }

  handleUpdateDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  };

  render() {
    const {
      todo,
      handleChangeProps,
      deleteTodoProps,
      setUpdate,
    } = this.props;
    const { id, title, completed } = todo;
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    const viewMode = {};
    const editMode = {};
    const { editing } = this.state;

    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    return (
      <div>
        <li className={styles.item}>
          <div onDoubleClick={this.handleEditing} style={viewMode}>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => handleChangeProps(id)}
              className={styles.checkbox}
            />
            <button type="button" aria-label="trash" style={{ color: 'orangered', fontSize: '16px' }} onClick={() => deleteTodoProps(id)}><FaTrash /></button>
            <span style={completed ? completedStyle : null}>
              {title}
            </span>
          </div>
          <input
            type="text"
            style={editMode}
            className={styles.textInput}
            value={title}
            onChange={(e) => {
              setUpdate(e.target.value, id);
            }}
            onKeyDown={this.handleUpdateDone}
          />
        </li>
      </div>
    );
  }
}

export default TodoItem;
