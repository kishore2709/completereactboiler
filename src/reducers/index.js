import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import authReducer from "./auth_reducer";
import equipswitchReducer from "./equipmentSwitch_reducer";

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  equip: equipswitchReducer
});

export default rootReducer;
