import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('created');
  const [searchTerm, setSearchTerm] = useState('');

  function handleAddTodo(event) {
    event.preventDefault();
    const newTodo = {
      id: Date.now(),
      title: event.target.elements.todo.value,
      completed: false,
      created: Date.now(),
    };
    setTodos([...todos, newTodo]);
    event.target.reset();
  }

  function handleToggleComplete(todoId) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function handleEditTodo(todoId, newTitle) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, title: newTitle };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function handleDeleteTodo(todoId) {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);
  }

  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  function handleSortChange(event) {
    setSort(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  function getFilteredTodos() {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'active':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }

  function getSortedTodos() {
    switch (sort) {
      case 'completed':
        return [...todos].sort((a, b) => a.completed - b.completed);
      default:
        return [...todos].sort((a, b) => a.created - b.created);
    }
  }

  function getSearchedTodos() {
    return getSortedTodos().filter(todo =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="todo" placeholder="Add new todo" required />
        <button type="submit">Add</button>
      </form>
      <ul>
        {getSearchedTodos().map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleComplete={handleToggleComplete}
            onEditTodo={handleEditTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
      <div className="filters">
        <label>
          <input
            type="radio"
            name="filter"
            value="all"
            checked={filter === 'all'}
            onChange={handleFilterChange}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="completed"
            checked={filter === 'completed'}
            onChange={handleFilterChange}
          />
          Completed
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="active"
            checked={filter === 'active'}
            onChange={handleFilterChange}
          />
          Active
        </label>
      </div>
      <div className="sort">
        <label>
          Sort by:
          <select value={sort} onChange={handleSortChange}>
            <option value="created">Created</option>
            <option value="completed">Completed</option>
          </select>
        </label>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}

function TodoItem({ todo, onToggleComplete, onEditTodo, onDeleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  function handleToggleComplete() {
    onToggleComplete(todo.id);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave(event) {
    event.preventDefault();
    onEditTodo(todo.id, newTitle);
    setIsEditing(false);
  }

  function handleCancel() {
    setIsEditing(false);
    setNewTitle(todo.title);
  }

  function handleDelete() {
    onDeleteTodo(todo.id);
  }

  return (
    <li className={todo.completed ? 'completed' : ''}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleComplete}
      />
      {isEditing ? (
        <form onSubmit={handleSave}>
          <input
            type="text"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
            required
          />
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      ) : (
        <span onClick={handleEdit}>{todo.title}</span>
      )}
      {isEditing ? null : (
        <button onClick={handleDelete}>Delete</button>
      )}
    </li>
  );
}

export default TodoList;