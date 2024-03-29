// FilterButtons.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTodos, markAllCompleted } from "../redux/actions";

const FilterButtons = () => {
  // Get the dispatch function from Redux
  const dispatch = useDispatch();

  // Get the current filter value from the Redux store
  const currentFilter = useSelector((state) => state.filter);

  // Function to handle filter selection change
  const handleFilter = (filter) => {
    // Dispatch the filterTodos action with the selected filter value
    dispatch(filterTodos(filter));
  };

  return (
    <div className="flex space-x-4 items-center">
      <select
        className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="ALL">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>

      <button
        className="text-sm px-2 py-1 bg-purple-500 text-white rounded ml-2"
        onClick={() => dispatch(markAllCompleted())}
      >
        Mark All Completed
      </button>
    </div>
  );
};

export default FilterButtons;
