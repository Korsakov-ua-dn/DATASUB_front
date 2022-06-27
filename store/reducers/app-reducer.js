import { paymentsAPI } from "../../api/api";

const initialState = {
    isServerError: '',
    isSucces: false,
    isPreloader: false,
  };

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case "APP/SET_SERVER_ERROR":
      case "APP/SET_SUCCES":
      case "APP/SET_PRELOADER":
        return { ...state, ...action.payload };
  
      default:
        return state;
    }
  };

//actions
export const setServerError = (isServerError) => ({
    type: "APP/SET_SERVER_ERROR",
    payload: { isServerError },
  });

export const setSucces = (isSucces) => ({
    type: "APP/SET_SUCCES",
    payload: { isSucces },
  });

export const setPreloader = (isPreloader) => ({
    type: "APP/SET_PRELOADER",
    payload: { isPreloader },
  });
  
  //thunk
  export const createPayTC = ( payload ) => (dispatch) => {
    dispatch(setPreloader(true));
    paymentsAPI
      .postUser(payload)
        .then((res) => {
          dispatch(setSucces(true));
          setTimeout(() => {
            dispatch(setSucces(false))
          }, 3000);
        })
        .catch((e) => {
          const errorMessage = e.response?.data?.message[0] || "Unknown error!";
          dispatch(setServerError(errorMessage));
          setTimeout(() => {
            dispatch(setServerError(''));
          }, 3000);
        })
        .finally(() => {
          dispatch(setPreloader(false));
        });
  };