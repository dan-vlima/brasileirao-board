import { api } from "../core/axios-config"
import { StandingType } from "../types/standing-type"


const getStandingsService = async (championshipId: string) => {
  try {
    const response = await api.get<StandingType[]>(`/campeonatos/${championshipId}/tabela`)
    return response.data
    
  } catch (error: any) {
    throw console.log(error)
}
}

export default getStandingsService