import productReducer from './productReducer'
import { combineReducers } from 'redux'
import shoppingcartReducer from './shoppingcartReducer'

const rootReducer = combineReducers({
  product: productReducer,
  ItemCart: shoppingcartReducer
});

export default rootReducer