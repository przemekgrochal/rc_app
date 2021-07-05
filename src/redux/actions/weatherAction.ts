import { FetchDataType } from '../../utilities/fetchData'

export const setCurrentWeather = (data: FetchDataType | null) => {
    return {
        type: 'SET_CURRENT_WEATHER',
        payload: data,
    }
}