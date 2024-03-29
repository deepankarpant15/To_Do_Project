// TodoList component renders filtered todos
// Uses useSelector hook to access Redux state

// Import useSelector hook from react-redux and TodoItem component
// Define TodoList component function

// Get filtered todos from Redux state
// Filter todos based on filter and search term
// Convert search term to lowercase for case-insensitive search

// Log filtered todos to console for debugging

// Render list of filtered todos
// Display a message indicating all notes
// Map over filtered todos and render TodoItem component for each todo

// Export TodoList component as default export

import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase(); // Convert search term to lowercase for case-insensitive search

    return todos.filter((todo) => {
      const matchesFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";

      const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  });

  // console.log("Filtered Todos:", filteredTodos);

  return (
    <ul>
      <li className="my-2 text-sm italic">All Your Notes Here...</li>
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;
