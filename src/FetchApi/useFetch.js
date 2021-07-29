import { useReducer, useEffect } from "react";
import axios from "axios";
import fetchReducer from "./Reducer";
import {
  FETCH_API_REQUEST,
  FETCH_API_SUCCESS,
  FETCH_API_FAILURE,
} from "./ActionTypes";
const BASE_URL = "https://fakestoreapi.com/products/";

export default function useFetch(params = "") {
  const [state, dispatch] = useReducer(fetchReducer, {
    data: [],
    loading: true,
  });

  useEffect(() => {
    dispatch({ type: FETCH_API_REQUEST });
    axios
      .get("https://fakestoreapi.com/products/" + params)
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: FETCH_API_SUCCESS,
          payload: { data: response.data },
        });
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        dispatch({ type: FETCH_API_FAILURE, payload: { error: error } });
      });
  }, [params]);

  return state;
}
