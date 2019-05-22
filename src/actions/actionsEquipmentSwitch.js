import { apiGet, apiPost } from "../api/apiEndpoints";
import { API_CONSTANT_MAP } from "../api/apiMap";
import {
  GET_EQUIPMENT_BY_TRACKING,
  TRACKING_ERROR,
  UPDATE_EQUIPMENT_BY_TRACKING
} from "./types";

export function getEquipmentByTrackingNo({ trackingNo }) {
  const tracking = { trackingNo: trackingNo };
  const endPoint = API_CONSTANT_MAP.equipswitch;
  // const request = apiGet(endPoint, tracking);
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const res = {
    trackingNo: trackingNo,
    regitemSubtypes: getRandom(1, 15),
    regitemSubsubtypes: getRandom(1, 35)
  };

  return function(dispatch) {
    dispatch(equipmentInfo(res));
    // request
    //   .then(success => {
    //     dispatch(equipmentInfo(success.data));
    //   })
    //   .catch(() => {
    //     dispatch(error("No Tracking Found"));
    //   });
  };
}

export function updateRegTypesByTrackingNo({ updateRegDetails }) {
  const endPoint = API_CONSTANT_MAP.equipswitch;
  const request = apiPost({
    endpoint: endPoint,
    data: updateRegDetails
  });
  return function(dispatch) {
    request
      .then(response => {
        dispatch(equipmentInfo(response.data));
      })
      .catch(({ response }) => {
        dispatch(error(response.data.error));
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
