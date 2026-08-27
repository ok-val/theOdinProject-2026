import { Component } from 'react';
import { Fragment } from 'react';

class CountInput extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   count: props.countRes
    // };
  }

  // handleSetCount = () => {
  //   if (this.props.countRes !== this.state.count) {
  //     this.setState({
  //       count: this.props.countRes
  //     });
  //   }
  //   return this.state.count;
  // };

  render() {
    return <footer>{this.props.countRes}</footer>;
  }
}

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemVal: props.todo,
      isEditing: false
    };
  }

  handleEdit = () => {
    this.setState((state) => ({
      ...state,
      isEditing: !this.state.isEditing
    }));
  };

  handleInputChange = (e) => {
    this.setState((state) => ({
      ...state,
      itemVal: e.target.value
    }));
  };

  render() {
    return (
      <li>
        {!this.state.isEditing ? (
          this.state.itemVal
        ) : (
          <form onSubmit={this.handleEdit}>
            <input
              name="todo-edit"
              value={this.state.itemVal}
              onChange={this.handleInputChange}
            />
          </form>
        )}
        <button onClick={() => this.handleEdit(this.props.todo)}>
          {!this.state.isEditing ? 'Edit' : 'Commit'}
        </button>
        <button
          onClick={() => this.props.handleDelete(this.props.todo)}
        >
          Delete
        </button>
      </li>
    );
  }
}

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Just some demo tasks', 'As an example'],
      inputVal: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: ''
    }));
  }

  handleDelete(toDel) {
    const res = this.state.todos.filter((item) => item !== toDel);
    this.setState((state) => ({
      ...state,
      todos: res
    }));
  }

  render() {
    // console.log(this.state.todos.length);
    return (
      <section>
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => (
            <Fragment key={todo}>
              <TodoItem todo={todo} handleDelete={this.handleDelete} />
            </Fragment>
          ))}
        </ul>
        <CountInput
          // key={this.state.todos.length}
          countRes={this.state.todos.length}
        />
      </section>
    );
  }
}

export default ClassInput;

/**
 * Tasks:
 *
 * 1. Implement a delete button for each task. The delete button should
 * remove that specific task from the state array, thus deleting the
 * task itself! Styling isn’t a priority at this moment, but the button
 * tag should be styled by default.
 *
 * 2. Implement a new class component, Count, that displays the number
 * of todos at any given time. Render it somewhere within the ClassInput
 * component.
 *
 * 3. Implement an edit button for each task. It should replace the todo
 * with an input field, and change the button itself to ‘Resubmit’, so
 * the edits can be saved. This is a comparatively harder task, kudos
 * for when you finish it!
 */
