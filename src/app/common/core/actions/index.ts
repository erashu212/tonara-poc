import { GET_TEACHER, SAVE_TEACHER } from "../models";

export const getTeachers = (payload?: any) => {
  return { type: GET_TEACHER, payload };
};

export const saveTeacher = (payload: any) => {
  return { type: SAVE_TEACHER, payload };
};
