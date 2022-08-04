import { api } from "../core/axios-config"
import { ChampionshipDataType } from "../types/championship-data-type";

const getAllChampionshipDataService = async (championshipId: string) => {
  try {
    const response = await api.get<ChampionshipDataType[]>(`/campeonatos/${championshipId}`)
    return response.data
    
  } catch (error: any) {
    throw console.log(error)
}
}

export default getAllChampionshipDataService