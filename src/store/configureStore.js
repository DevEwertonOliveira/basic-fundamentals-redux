import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import employeeReducer from "./employess";
import taskReducer from "./tasks";
import logger from "redux-logger";
import error from "../middleware/error";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employees: employeeReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    logger,
    error,
  ],
});

export default store;
