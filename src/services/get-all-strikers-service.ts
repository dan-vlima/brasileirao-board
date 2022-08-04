import { api } from "../core/axios-config"
import { StrikerType } from "../types/striker-type";

const getAllStrikersService = async (championshipId: string) => {
  try {
    const response = await api.get<StrikerType[]>(`/campeonatos/${championshipId}/artilharia`)
    return response.data
    
  } catch (error: any) {
    throw console.log(error)
}
}

export default getAllStrikersService