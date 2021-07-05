import { state as initialState } from '../state';

export const weatherReducer = (state = initialState, action: {type: string, payload: any}) => {
    switch(action.type) {
        case 'SET_CURRENT_WEATHER':
            return {
                ...state,
                currentWeather: action.payload
            }
        default:
            return state;   
    }
}