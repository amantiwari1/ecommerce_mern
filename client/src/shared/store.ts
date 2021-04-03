import { createStore,  Store, AnyAction } from "redux";
import reducer from "../reducers";
import AppState from "../models/client/AppState";
import { composeWithDevTools } from "redux-devtools-extension";

const store: Store<AppState, AnyAction> = createStore(
  reducer,
  composeWithDevTools()
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;