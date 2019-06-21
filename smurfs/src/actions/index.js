import axios from "axios";

export const GET_SMURFS = "GET_SMURFS";
export const GET_ERROR = "GET_ERROR";
// export const GET_SMURFS = "GET_SMURFS";
// export const GET_SMURFS = "GET_SMURFS";
// export const GET_SMURFS = "GET_SMURFS";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => dispatch({ type: GET_SMURFS, payload: res.data }))
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_ERROR });
    });
};

// export const getPeople = () => dispatch => {
//   dispatch({type: FETCHING});
//   axios.get('https://swapi.co/api/people/')
//   .then(res => dispatch({type: GET_PEOPLE, payload: res.data.results}))
//   .catch(err => dispatch({type: GET_ERRORS, payload: err.message}))
// }
