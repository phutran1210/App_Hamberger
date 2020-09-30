import { combineReducers } from 'redux';
import BurgerReducer from './BurgerReducer';

//rootReducer quản lý state của toàn ứng dụng
const rootReducer = combineReducers({
    //Nơi khai báo các state (reducer) theo từng nghiệp vụ
    //BurgerReducer chứa burgerState
    BurgerReducer,
})

export default rootReducer;