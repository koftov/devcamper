import {
  MY_COURSE_LIST_REQUEST,
  MY_COURSE_LIST_SUCCESS,
  MY_COURSE_LIST_FAIL,
  MY_COURSE_DETAILS_REQUEST,
  MY_COURSE_DETAILS_SUCCESS,
  MY_COURSE_DETAILS_FAIL,
  MY_COURSE_DELETE_REQUEST,
  MY_COURSE_DELETE_SUCCESS,
  MY_COURSE_DELETE_FAIL,
  MY_COURSE_CREATE_RESET,
  MY_COURSE_CREATE_FAIL,
  MY_COURSE_CREATE_SUCCESS,
  MY_COURSE_CREATE_REQUEST,
  MY_COURSE_UPDATE_REQUEST,
  MY_COURSE_UPDATE_SUCCESS,
  MY_COURSE_UPDATE_FAIL,
  MY_COURSE_UPDATE_RESET,
  MY_COURSE_CREATE_REVIEW_REQUEST,
  MY_COURSE_CREATE_REVIEW_SUCCESS,
  MY_COURSE_CREATE_REVIEW_FAIL,
  MY_COURSE_CREATE_REVIEW_RESET,
  MY_COURSE_DETAILS_RESET,
} from "../constants/courseConstants";

export const bootcampListReducer = (
  state = { bootcamps: [], pagination: {} },
  action
) => {
  switch (action.type) {
    case MY_COURSE_LIST_REQUEST:
      return { ...state, loading: true };
    case MY_COURSE_LIST_SUCCESS:
      return {
        loading: false,
        bootcamps: action.payload.bootcamps,
        pages: action.payload.pages,
      };
    case MY_COURSE_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const bootcampDetailsReducer = (state = { course: {} }, action) => {
  switch (action.type) {
    case MY_COURSE_DETAILS_REQUEST:
      return { loading: true, ...state };
    case MY_COURSE_DETAILS_SUCCESS:
      return { loading: false, course: action.payload };
    case MY_COURSE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case MY_COURSE_DETAILS_RESET:
      return { course: {} };
    default:
      return state;
  }
};

export const courseDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case MY_COURSE_DELETE_REQUEST:
      return { loading: true };
    case MY_COURSE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case MY_COURSE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const courseCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case MY_COURSE_CREATE_REQUEST:
      return { loading: true };
    case MY_COURSE_CREATE_SUCCESS:
      return { loading: false, success: true, course: action.payload };
    case MY_COURSE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case MY_COURSE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const courseUpdateReducer = (state = { course: {} }, action) => {
  switch (action.type) {
    case MY_COURSE_UPDATE_REQUEST:
      return { loading: true };
    case MY_COURSE_UPDATE_SUCCESS:
      return { loading: false, success: true, course: action.payload };
    case MY_COURSE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case MY_COURSE_UPDATE_RESET:
      return { course: {} };
    default:
      return state;
  }
};
