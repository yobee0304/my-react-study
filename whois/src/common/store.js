import { legacy_createStore as createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import searchReducer from '../search/state';
import searchSaga from '../search/state/saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  common: searchReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

function* rootSaga() {
  yield all([searchSaga()]);
}
sagaMiddleware.run(rootSaga);

export default store;
