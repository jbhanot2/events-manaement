import {createStore, applyMiddleware, compose} from 'redux'
import composeReducer from './../redux/reducer';
import rootSaga from './saga';
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();

const persistedState = localStorage.getItem('reduxState') 
                    ? JSON.parse(localStorage.getItem('reduxState'))
                    : []

const store = createStore(composeReducer,persistedState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

store.subscribe((state) => {
    let data = store.getState();
    if(data) {
        localStorage.setItem('reduxState', JSON.stringify(data) )
    }
})

export default store;