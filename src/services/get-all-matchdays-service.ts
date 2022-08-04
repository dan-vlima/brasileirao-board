import { api } from "../core/axios-config"
import { MatchdaysDataType } from "../types/matchdays-data-type";

const getAllMatchdaysService = async (championshipId: string) => {
  try {
    const response = await api.get<MatchdaysDataType[]>(`/campeonatos/${championshipId}/rodadas`)
    return response.data
    
  } catch (error: any) {
    throw console.log(error)
}
}

export default getAllMatchdaysService