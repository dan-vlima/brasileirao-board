import { useQuery } from "react-query"
import getAllChampionshipDataService from "../services/get-all-championship-data-service"

export const useGetAllChampionshipData = (championshipId: string) => {
    const { data, error, isLoading } = useQuery(
      ['/championship-data'],
      () => getAllChampionshipDataService(championshipId)
    )
  
    return { data, error, isLoading }
  }