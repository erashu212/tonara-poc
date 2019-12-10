export interface Teacher {
  firstName: string;
  lastName: string;
  email: string;
  instrument: string[];
  about: string;
  profileImage: string;
  teachingSince: number;
  teachingLevel: string[];
  address: string;
  lessonPrice: number;
}

export interface TeacherState {
  teacher: {
    content: Teacher[];
    isLoading?: boolean;
    error?: any;
  };
}

export const SAVE_TEACHER = "SAVE_TEACHER";
export const SAVE_TEACHER_SUCCESS = "SAVE_TEACHER_SUCCESS";
export const SAVE_TEACHER_FAILURE = "SAVE_TEACHER_FAILURE";

export const GET_TEACHER = "GET_TEACHER";
export const GET_TEACHER_SUCCESS = "GET_TEACHER_SUCCESS";
export const GET_TEACHER_FAILURE = "GET_TEACHER_FAILURE";

type SaveTeacher = { type: typeof SAVE_TEACHER; payload?: any };
type SaveTeacherSuccess = { type: typeof SAVE_TEACHER_SUCCESS; payload?: any };
type SaveTeacherFailure = { type: typeof SAVE_TEACHER_FAILURE; payload?: any };

type GetTeacher = { type: typeof GET_TEACHER; payload?: any };
type GetTeacherSuccess = { type: typeof GET_TEACHER_SUCCESS; payload?: any };
type GetTeacherFailure = { type: typeof GET_TEACHER_FAILURE; payload?: any };

export type TeacherAction =
  | SaveTeacher
  | SaveTeacherSuccess
  | SaveTeacherFailure
  | GetTeacher
  | GetTeacherSuccess
  | GetTeacherFailure;
