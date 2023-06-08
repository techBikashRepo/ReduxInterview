export const PURCHASE = "PURCHASE";
export const DELETE = "DELETE";
export const LOGIN = "LOGIN";

export const validateUser = (loginDetail) => {
  return (dispatch) => {
    // API call fetching user and then validate
    setTimeout(() => {
      dispatch({ type: LOGIN, payLoad: loginDetail });
    }, 2000);
  };
};
