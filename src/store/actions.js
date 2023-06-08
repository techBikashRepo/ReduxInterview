export const PURCHASE = "PURCHASE";
export const DELETE = "DELETE";
export const LOGIN = "LOGIN";

export const validateUser = (loginDetail) => {
  // API call fetching user and then validate
  setTimeout(() => {
    dispatchEvent({ type: LOGIN, payLoad: loginDetail });
  }, 2000);
};
