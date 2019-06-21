import {
  GET_SMURFS,
  GET_ERROR,
  ADD_SMURF,
  DELETE_SMURF,
  GET_SMURF,
  UPDATE_SMURF
} from "../actions/index";

const INITIAL_STATE = {
  smurfs: [],
  smurf: {},
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false,
        deletingSmurf: false,
        updatingSmurf: false,
        smurf: {}
      };
    case GET_SMURF:
      return {
        ...state,
        smurf: action.payload
      };
    case ADD_SMURF:
      return {
        ...state,
        addingSmurf: true
      };
    case DELETE_SMURF:
      return {
        ...state,
        error: action.payload
      };

    case GET_ERROR:
      return {
        ...state,
        deletingSmurf: true
      };
    case UPDATE_SMURF:
      return {
        ...state,
        updatingSmurf: true
      };
    default:
      return state;
  }
};
