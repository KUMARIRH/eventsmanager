import {
  GET_EVENTS,
  ADD_EVENT,
  DELETE_EVENT,
  GET_EVENT,
  UPDATE_EVENT,
  GET_USER_EVENTS
} from "../actions/types";

const initialState = {
  events: [],
  event: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload
      };
    case GET_EVENT:
      return {
        ...state,
        event: action.payload
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(event => event.id !== action.payload)
      };
    case ADD_EVENT:
      return {
        ...state,
        events: [action.payload, ...state.events]
      };
    case UPDATE_EVENT:
      return {
        ...state,
        events: state.events.map(event =>
          event.id === action.payload.id ? (event = action.payload) : event
        )
      };
    case GET_USER_EVENTS:
      return {
        ...state,
        events: action.payload
      };

    default:
      return state;
  }
}
