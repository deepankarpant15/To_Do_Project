import { configureStore } from "@reduxjs/toolkit"; // Import configureStore from Redux Toolkit
import todoReducer from "./reducer"; // Import your reducer

// Create the Redux store using configureStore
const store = configureStore({
  reducer: todoReducer, // Pass your reducer to the store
});

export default store; // Export the store
