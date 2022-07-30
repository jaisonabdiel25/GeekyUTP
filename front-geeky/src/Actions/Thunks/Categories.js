import clientAxios from "../../config/axios";
import { getCategories, getCategoriesReady, getCategoriesError } from '../Categories'

export const getCategoriesAction = () => {
    return async (dispatch) => {
      dispatch(getCategories());
      try {
        const {data} = await clientAxios.get("/categorie");
        dispatch(getCategoriesReady(data.categorie));

      } catch (error) {
        console.log(error);
        dispatch(getCategoriesError());
      }
    };
  };