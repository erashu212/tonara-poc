import { createStore, Store } from "redux";
import teacherReducer from "./reducers";
import { TeacherState, TeacherAction } from "./models";

const store: Store<TeacherState, TeacherAction> = createStore(teacherReducer);
export default store;
