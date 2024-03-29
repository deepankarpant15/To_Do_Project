// actions.js

// Define action creators for managing todo actions
// Import action type constants from actionTypes.js

// Action creator for adding a new todo
// Returns an action object with type ADD_TODO and payload containing the todo text

// Action creator for toggling the completion status of a todo
// Returns an action object with type TOGGLE_TODO and payload containing the todo id

// Action creator for removing a todo
// Returns an action object with type REMOVE_TODO and payload containing the todo id

// Action creator for marking a todo as completed
// Returns an action object with type MARK_COMPLETED and payload containing the todo id

// Action creator for marking a todo as incomplete
// Returns an action object with type MARK_INCOMPLETE and payload containing the todo id

// Action creator for filtering todos based on a filter value
// Returns an action object with type FILTER_TODOS and payload containing the filter value

// Action creator for marking all todos as completed
// Returns an action object with type MARK_ALL_COMPLETED

// Action creator for updating the search term for filtering todos
// Returns an action object with type UPDATE_SEARCH_TERM and payload containing the searchTerm

import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_TERM,
} from "./actionTypes";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const markCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: { id },
});

export const markIncomplete = (id) => ({
  type: MARK_INCOMPLETE,
  payload: { id },
});

export const filterTodos = (filter) => ({
  type: FILTER_TODOS,
  payload: { filter },
});

export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

export const updateSearchTerm = (searchTerm) => ({
  type: UPDATE_SEARCH_TERM,
  payload: { searchTerm },
});
