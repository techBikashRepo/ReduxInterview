import * as actions from "./actions";
const initialData = {
  users: ["Admin", "Manager", "End-User"],
  loginDetail: "None",
};
const loginReducer = (state = initialData, action) => {
  if (action.type === actions.LOGIN) {
    return {
      ...state,
      loginDetail: action.payLoad,
    };
  }
  return state;
};

export default loginReducer;
