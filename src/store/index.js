import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

// menginisiati store dengan redux devtools
const store = createStore(rootReducer, composeWithDevTools());

export default store;
