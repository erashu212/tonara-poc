import {
  TeacherState,
  TeacherAction,
  GET_TEACHER,
  SAVE_TEACHER,
  SAVE_TEACHER_SUCCESS,
  SAVE_TEACHER_FAILURE,
  Teacher
} from "../models";
import { Reducer, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import teachers from "../services/db";

type State = {
  content: Teacher[];
  isLoading: boolean;
  error: any;
};
export const initialState = {
  content: [],
  isLoading: false,
  error: null
};

const teacherReducer: Reducer<State> = (
  state: State = initialState,
  action: TeacherAction
): State => {
  switch (action.type) {
    case GET_TEACHER:
      const searchTerm: string = action.payload;
      let results = teachers;
      if (searchTerm) {
        results = results.filter(
          (result: Teacher) =>
            result.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) >
              -1 ||
            result.lastName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
        );
      }
      return { ...state, content: results };
    case SAVE_TEACHER:
      return { ...state, content: [] };
    case SAVE_TEACHER_SUCCESS:
      return { ...state, content: [] };
    case SAVE_TEACHER_FAILURE:
      return { ...state, content: [] };
    default:
      return state;
  }
};

export default combineReducers({
  teacher: teacherReducer,
  form: formReducer
});
