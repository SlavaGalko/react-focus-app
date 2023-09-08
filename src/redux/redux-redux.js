import { combineReducers, legacy_createStore as createStore  } from "redux";
import mainContentFocusReducer from "./reducers/maincontent-focus-reducer";
import mainContentShortBreakReducer from './reducers/maincontent-shortBreak-reducer';
import mainContentLongBreakReducer from "./reducers/maincontent-longbreak-reducer";

let reducers = combineReducers({
    mainContentFocus: mainContentFocusReducer,
    mainContentShortBreak: mainContentShortBreakReducer,
    mainContentLongBreak: mainContentLongBreakReducer
});

let store = createStore(reducers);

export default store;