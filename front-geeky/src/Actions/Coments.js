import { types } from "../types/types";

//Coments
export const getComents = () => {
  return {
    type: types.getComents,
    payload: true,
  };
};

export const getComentsReady = (data) => {
  return {
    type: types.getComentsReady,
    payload: data,
  };
};

export const getComentsError = () => {
  return {
    type: types.getComentsError,
    payload: true,
  };
};

export const newComents = () => {
    return {
      type: types.newComents,
      payload: true,
    };
  };
  
  export const newComentsReady = (data) => {
    return {
      type: types.newComentsReady,
      payload: data,
    };
  };
  
  export const newComentsError = () => {
    return {
      type: types.newComentsError,
      payload: true,
    };
  };
