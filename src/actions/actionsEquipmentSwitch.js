import { apiPut, apiGetWithPathVariable } from "../api/apiEndpoints";
import { API_CONSTANT_MAP } from "../api/apiMap";

import {
  GET_EQUIPMENT_BY_TRACKING,
  TRACKING_ERROR,
  UPDATE_EQUIPMENT_BY_TRACKING
} from "./types";

export function getEquipmentByTrackingNo({ trackingNo }) {
  const endPoint = API_CONSTANT_MAP.equipswitch;
  const request = apiGetWithPathVariable(endPoint, trackingNo);

  return function(dispatch) {
    request
      .then(success => {
        dispatch(equipmentInfo(success.data));
      })
      .catch(() => {
        dispatch(error("No Tracking Found"));
      });
  };
}

export function updateRegTypesByTrackingNo({
  trackingNo,
  regitemSubtypes,
  regitemSubsubtypes
}) {
  const endPoint = API_CONSTANT_MAP.equipswitchupdate + trackingNo;
  const regdetails = {
    trackingNo: trackingNo,
    regitemSubtypes: regitemSubtypes,
    regitemSubsubtypes: regitemSubsubtypes
  };
  const request = apiPut(endPoint, regdetails);
  return function(dispatch) {
    request
      .then(response => {
        dispatch(equipmentInfo(response.data));
      })
      .catch(({ response }) => {
        dispatch(error(response));
      });
  };
}

export const equipmentInfo = data => ({
  type: GET_EQUIPMENT_BY_TRACKING,
  payload: data
});

export const equipmentUpdate = data => ({
  type: UPDATE_EQUIPMENT_BY_TRACKING,
  payload: data
});

export const error = error => ({
  type: TRACKING_ERROR,
  payload: error
});
