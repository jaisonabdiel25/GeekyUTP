
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { combineReducers, applyMiddleware } from 'redux';

import { authReducer } from '../reducers/authReducer';
import { brandsReducer } from '../reducers/brandsReducers';
import { productReducer } from '../reducers/productReducer';
import { categorieReducers } from '../reducers/categorieReducers';
import { subcategorieReducers } from '../reducers/subcategorieReducers';
import { provinceReducers } from '../reducers/provinceReducers';
import { paymentReducers } from '../reducers/paymentReducers';
import { comentsReducers } from '../reducers/comentsReducers';

const reducer = combineReducers({
    auth: authReducer,
    brand: brandsReducer,
    product: productReducer,
    categorie: categorieReducers,
    subcategorie: subcategorieReducers,
    province: provinceReducers,
    payment: paymentReducers,
    coments: comentsReducers
  });

const middlewareEnhancer = applyMiddleware(thunk);

export const store = configureStore({
    reducer,
    undefined,
    middlewareEnhancer
})