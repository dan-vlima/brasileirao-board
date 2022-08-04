import { api, cartolaAPI } from "../core/axios-config"
import { AthleteType } from "../types/athlete-type"


const getAllAthletesService = async () => {
  try {
    const response = await cartolaAPI.get<AthleteType[]>('/mercado/destaques')
    return response.data
    
  } catch (error: any) {
    throw console.log(error)
}
}

export default getAllAthletesService