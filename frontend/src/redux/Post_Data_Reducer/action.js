import axios from "axios";
import {
  POST_DATA_FAILURE,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
} from "./actionTypes";

export const Add_Post_Action_Request = () => {
  return { type: POST_DATA_REQUEST };
};

export const Add_Post_Action_Success = (payload) => {
  return { type: POST_DATA_SUCCESS, payload };
};

export const Add_Post_Action_Failure = (error) => {
  return { type: POST_DATA_FAILURE, error };
};

export const Add_Data_Handler = (payload) => (dispatch) => {
  dispatch(Add_Post_Action_Request());
  console.log(payload);
  axios
    .post("https://mock-prep.vercel.app/posts", payload)
    .then((response) => {
      const responseData = response.data;
      console.log(responseData);
      dispatch(Add_Post_Action_Success(responseData));
    })
    .catch((error) => {
      dispatch(Add_Post_Action_Failure(error.message));
    });
};
