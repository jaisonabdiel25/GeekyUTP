import clientAxios from "../../config/axios";
import { getBrands, getBrandsReady, getBrandsError } from '../Brands'

export const getBrandsActions = () => {
    return async (dispatch) => {
      dispatch(getBrands());
      try {
        const { data } = await clientAxios.get("/brands");
        dispatch(getBrandsReady(data.brand));
      } catch (error) {
        console.log(error.response.data);
        dispatch(getBrandsError());
      }
    };
  };