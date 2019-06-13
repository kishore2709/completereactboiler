import axios from "../axios/axios";
import { getSession } from "../utilities/permissions";

//const BASE_URL = process.env.REACT_APP_API || 'http://localhost:5000/api';
/* Have to set env in future
const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_ZEEGUU_API_ENDPOINT_PROD
    : process.env.REACT_APP_ZEEGUU_API_ENDPOINT_DEV
*/
export async function apiGet(endpoint, params) {
  //const params = { session: getSession() }
  const res = await axios.get(endpoint, { params });
  return res;
}
export async function apiGetWithPathVariable(endpoint, params) {
  let headerToken = `Bearer ${localStorage.getItem("token")}`;
  const res = await axios.get(endpoint + params, {
    headers: { Authorization: headerToken }
  });
  return res;
}

export async function apiPut(endpoint, data) {
  let headerToken = `Bearer ${localStorage.getItem("token")}`;
  const res = await axios({
    method: "put",
    url: endpoint,
    data: data,
    headers: {
      Authorization: headerToken
    }
  });

  return res;
}

export async function apiPost(endpoint, data, isForm) {
  let headerToken = `Bearer ${localStorage.getItem("token")}`;

  const params = { session: getSession() };
  const res = await axios({
    method: "post",
    url: endpoint,
    params: params,
    data: data,
    headers: {
      Authorization: headerToken
    }
  });

  return res;
}
