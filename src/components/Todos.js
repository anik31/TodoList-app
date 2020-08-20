import React, { Component } from "react";
import Todoitems from "./Todoitems";
import PropTypes from "prop-types";

export class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <Todoitems
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};
export default Todos;
