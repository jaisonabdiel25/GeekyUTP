import clientAxios from "../../config/axios";
import { getProvince, getProvinceReady, getProvinceError } from '../Province'

export const getProvinceAction = () => {
    return async (dispatch) => {
      dispatch(getProvince());
      try {
        const {data} = await clientAxios.get("/province");
        dispatch(getProvinceReady(data.province));

      } catch (error) {
        console.log(error);
        dispatch(getProvinceError());
      }
    };
  };