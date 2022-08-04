import { api } from "../core/axios-config"
import { LiveMatchType } from "../types/live-match-type";


const getAllLiveMatchesService = async () => {
  try {
    const response = await api.get<LiveMatchType[]>(`/ao-vivo`)
    return response.data
    
  } catch (error: any) {
    throw console.log(error)
}
}

export default getAllLiveMatchesService