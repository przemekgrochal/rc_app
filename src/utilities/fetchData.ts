export type FetchDataType = {
  code: number,
  message: string,
  coord: {
      lon: number,
      lat: number
  },
  weather: [
      {
          id: number,
          main: string,
          description: string,
          icon: string
      }
  ],
  base: string,
  main: {
      temp: number,
      feels_like: number,
      temp_min: number,
      temp_max: number,
      pressure: number,
      humidity: number
  },
  visibility: number,
  wind: {
      speed: number,
      deg: number
  },
  clouds: {
      all: number
  },
  dt: number,
  sys: {
      type: number,
      id: number,
      country: string,
      sunrise: number,
      sunset: number
  },
  timezone: number,
  id: number,
  name: string,
  cod: number
}

export const fetchData = async(urlApi: string, methods: string, bodyData: any) => {
  try 
  {
    const response = await fetch(urlApi, {
        method: methods,
        headers: {
            "Content-Type": "application/json",
        },
        body: bodyData ? JSON.stringify(bodyData) : null,
    })

    return await response.json();
  } 
  catch (err) 
  {
      if (!window.navigator.onLine) {
          console.log("Sprawdz połączenie z internetem!");
      }

      console.log(err);     
  }
}