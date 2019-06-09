import { LOGIN } from "./type";

const initialState = {
  user: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      // console.warn("dataField", action.dataField);
      // console.warn("data", action.data);
      return {
        ...state,
        user: action.data
      };
    }

    default:
      return state;
  }
};
