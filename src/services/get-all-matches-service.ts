import { api } from "../core/axios-config"
import { MatchesType } from "../types/matches-type";


const getAllMatchesService = async (championshipId: string) => {
  try {
    const response = await api.get<MatchesType>(`/campeonatos/${championshipId}/partidas`)
    return response.data
    
  } catch (error: any) {
    throw console.log(error)
}
}

export default getAllMatchesService