import clientAxios from "../../config/axios";
import { getSubcategories, getSubcategoriesReady, getSubcategoriesError } from '../Subcategorie'

export const getSubcategoriesAction = (id) => {
    return async (dispatch) => {
      dispatch(getSubcategories());
      try {

        if(!id) id = '62d0ce5960c50cd539d70d43'

        const body = {
          id: id
        }

        const {data} = await clientAxios.post("/subcategorie", body);

        dispatch(getSubcategoriesReady(data.subcategorie));
      } catch (error) {
        console.log(error);
        dispatch(getSubcategoriesError());
      }
    };
  };