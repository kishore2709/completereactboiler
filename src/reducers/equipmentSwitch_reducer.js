import { GET_EQUIPMENT_BY_TRACKING, TRACKING_ERROR } from "../actions/types";

const initialState = {
  regItemDetails: {},
  error: ""
};
let equipswitchReducer = {};
export default (equipswitchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EQUIPMENT_BY_TRACKING:
      return {
        ...state,
        error: "",
        regItemDetails: action.payload
      };

    case TRACKING_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
});
