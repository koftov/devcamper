import axios from "axios";
import {
  BOOTCAMP_LIST_REQUEST,
  BOOTCAMP_LIST_SUCCESS,
  BOOTCAMP_LIST_FAIL,
  BOOTCAMP_DELETE_SUCCESS,
  BOOTCAMP_DELETE_REQUEST,
  BOOTCAMP_DELETE_FAIL,
  BOOTCAMP_CREATE_REQUEST,
  BOOTCAMP_CREATE_SUCCESS,
  BOOTCAMP_CREATE_FAIL,
  BOOTCAMP_UPDATE_REQUEST,
  BOOTCAMP_UPDATE_SUCCESS,
  BOOTCAMP_UPDATE_FAIL,
  BOOTCAMP_CREATE_REVIEW_REQUEST,
  BOOTCAMP_CREATE_REVIEW_SUCCESS,
  BOOTCAMP_CREATE_REVIEW_FAIL,
  BOOTCAMP_DETAILS_REQUEST,
  BOOTCAMP_DETAILS_SUCCESS,
  BOOTCAMP_DETAILS_FAIL,
} from "../constants/bootcampConstants";

export const listBootcamps =
  (page = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: BOOTCAMP_LIST_REQUEST });

      const {
        data: { data, pages },
      } = await axios.get(`/api/bootcamps?limit=4&page=${page}`);

      dispatch({
        type: BOOTCAMP_LIST_SUCCESS,
        payload: { bootcamps: data, pages },
      });
    } catch (error) {
      dispatch({
        type: BOOTCAMP_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listBootcampDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BOOTCAMP_DETAILS_REQUEST });

    const {
      data: { data },
    } = await axios.get(`/api/bootcamps/${id}`);

    dispatch({
      type: BOOTCAMP_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BOOTCAMP_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteBootcamp = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BOOTCAMP_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/bootcamps/${id}`, config);

    dispatch({
      type: BOOTCAMP_DELETE_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: BOOTCAMP_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createBootcamp = (bootcamp) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BOOTCAMP_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/bootcamps`, bootcamp, config);

    dispatch({
      type: BOOTCAMP_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BOOTCAMP_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    throw Error(error);
  }
};

export const updateBootcamp = (bootcamp) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BOOTCAMP_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/bootcamps/${bootcamp._id}`,
      bootcamp,
      config
    );

    dispatch({
      type: BOOTCAMP_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BOOTCAMP_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createBootcampReview =
  (bootcampId, review) => async (dispatch, getState) => {
    try {
      dispatch({
        type: BOOTCAMP_CREATE_REVIEW_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(`/api/bootcamps/${bootcampId}/reviews`, review, config);

      dispatch({
        type: BOOTCAMP_CREATE_REVIEW_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: BOOTCAMP_CREATE_REVIEW_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getMyBootcamp = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BOOTCAMP_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const {
      data: { data },
    } = await axios.get(`/api/bootcamps/getmybootcamp`, config);

    dispatch({
      type: BOOTCAMP_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BOOTCAMP_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
