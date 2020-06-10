import {
  GET_EVENTS,
  DELETE_EVENT,
  ADD_EVENT,
  UPDATE_EVENT,
  GET_EVENT,
  ADD_USER,
  GET_USERS,
  LOGGED_USER,
  LOGGED_IN,
  GET_USER_EVENTS
} from "./types";
import axios from "axios";

export const getEvents = () => async dispatch => {
  const res = await axios.get(
    "https://my-json-server.typicode.com/KUMARIRH/events/events2020"
  );
  dispatch({ type: GET_EVENTS, payload: res.data });
};

export const getUserEvents = id => async dispatch => {
  const res = await axios.get(
    `https://my-json-server.typicode.com/KUMARIRH/events/users/${id}/events2020`
  );
  dispatch({ type: GET_USER_EVENTS, payload: res.data });
};

export const getEvent = id => async dispatch => {
  const res = await axios.get(
    `https://my-json-server.typicode.com/KUMARIRH/events/events2020/${id}`
  );
  dispatch({ type: GET_EVENT, payload: res.data });
};

export const deleteEvent = id => async dispatch => {
  try {
    await axios.delete(
      `https://my-json-server.typicode.com/KUMARIRH/events/events2020/${id}`
    );
    dispatch({
      type: DELETE_EVENT,
      payload: id
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: DELETE_EVENT,
      payload: id
    });
  }
};

export const addEvent = event => async dispatch => {
  const res = await axios.post(
    " https://my-json-server.typicode.com/KUMARIRH/events/events2020",
    event
  );
  dispatch({
    type: ADD_EVENT,
    payload: res.data
  });
};

export const updateEvent = event => async dispatch => {
  const res = await axios.put(
    `https://my-json-server.typicode.com/KUMARIRH/events/events2020/${event.id}`,
    event
  );
  dispatch({
    type: UPDATE_EVENT,
    payload: res.data
  });
};

export const getUsers = () => async dispatch => {
  const res = await axios.get(
    "https://my-json-server.typicode.com/KUMARIRH/events/users"
  );
  dispatch({ type: GET_USERS, payload: res.data });
};

export const addUser = user => async dispatch => {
  const res = await axios.post(
    " https://my-json-server.typicode.com/KUMARIRH/events/users",
    user
  );
  dispatch({
    type: ADD_USER,
    payload: res.data
  });
};

export const loggedUser = userlogged => dispatch => {
  dispatch({ type: LOGGED_USER, payload: userlogged });
};
export const loggedIn = login => dispatch => {
  dispatch({ type: LOGGED_IN, payload: login });
};
