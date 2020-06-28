import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import { createRootReducer } from '../redux/reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { history } from '.'

const middlewares = [routerMiddleware(history), thunkMiddleware]

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = createRootReducer(history)
const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares))
)

export const persistor = persistStore(store)