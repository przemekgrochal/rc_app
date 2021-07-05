import { combineReducers } from 'redux'
import { weatherReducer } from './reducers/weatherReducer';

export const rootReducer = combineReducers({
    weatherReducer: weatherReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>