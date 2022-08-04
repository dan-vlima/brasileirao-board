import { api } from "../core/axios-config"
import { AthleteType } from "../types/athlete-type"


const getAllAthletesService = async () => {
  try {
    const response = await api.get<AthleteType[]>('/atletas/21')
    return response.data
    
  } catch (error: any) {
    throw console.log(error)
}
}

export default getAllAthletesService