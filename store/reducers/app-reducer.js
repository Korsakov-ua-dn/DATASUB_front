const initialState = {
    isServerError: false,
  };

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case "APP/SET_SERVER_ERROR":
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
  
  //thunk
  export const createPayTC = () => (dispatch) => {
    // dispatch(setPreloader(true));
    signUpAPI
      .getToken()
      .then((res) => {
        localStorage.setItem("token", res.data.token);
      })
      .catch((e) => {
        const errorMessage = e.response?.data?.message || "Unknown error!";
        console.log(errorMessage);
      })
      .finally(() => {
        // dispatch(setPreloader(false));
      });
  };
  