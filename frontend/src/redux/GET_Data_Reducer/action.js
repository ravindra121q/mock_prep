import axios from "axios";
import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./actionTypes";

export const Get_Post_Action_Request = () => {
  return { type: GET_DATA_REQUEST };
};
export const Get_Post_Action_Success = (payload) => {
  return { type: GET_DATA_SUCCESS, payload };
};
export const Get_Post_Action_Failure = () => {
  return { type: GET_DATA_FAILURE };
};
export const Get_Data_Handler = (page) => (dispatch) => {
  dispatch(Get_Post_Action_Request());
  axios
    .get("https://mock-prep.vercel.app/posts", {
      params: {
        _limit: 10,
        _page: page,
      },
    })
    .then((res) => {
      console.log(res.data);
      dispatch(Get_Post_Action_Success(res.data));
    })
    .catch((error) => {
      dispatch(Get_Post_Action_Failure(error));
    });
};

