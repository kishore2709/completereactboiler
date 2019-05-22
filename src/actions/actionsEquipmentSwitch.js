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
  const res = {
    trackingNo: trackingNo,
    regitemSubtypes: 5,
    regitemSubsubtypes: 15
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

        console.log(response.data);
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
