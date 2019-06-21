import axios from "axios";

export const GET_SMURFS = "GET_SMURFS";
export const GET_ERROR = "GET_ERROR";
export const ADD_SMURF = "ADD_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
export const GET_SMURF = "GET_SMURF";
export const UPDATE_SMURF = "UPDATE_SMURF";

export const getSmurfs = () => dispatch => {
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => dispatch({ type: GET_SMURFS, payload: res.data }))
    .catch(err => {
      dispatch({ type: GET_ERROR, payload: err.response.statusText });
    });
};

export const addSmurf = payload => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", payload)
    .then(res => dispatch({ type: ADD_SMURF }))
    .catch(err => {
      dispatch({ type: GET_ERROR, payload: err.response.statusText });
    });
};

export const deleteSmurf = id => dispatch => {
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({ type: DELETE_SMURF });
      dispatch({ type: GET_SMURFS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ERROR, payload: err.response.statusText });
    });
};

export const getSmurfById = id => dispatch => {
  axios
    .get(`http://localhost:3333/smurfs/`)
    .then(res => {
      const smurfs = res.data;
      let smurf = smurfs.filter(sm => sm.id == id);
      dispatch({ type: GET_SMURF, payload: smurf[0] });
    })
    .catch(err => {
      dispatch({ type: GET_ERROR, payload: err.response.statusText });
    });
};

export const updateSmurf = (id, payload) => dispatch => {
  axios
    .put(`http://localhost:3333/smurfs/${parseInt(id)}`, payload)
    .then(res => {
      dispatch({ type: UPDATE_SMURF });
    })
    .catch(err => {
      dispatch({ type: GET_ERROR, payload: err.response.statusText });
    });
};
