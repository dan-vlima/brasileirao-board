import { useQuery } from "react-query"
import getAllMatchesService from "../services/get-all-matches-service"



export const useGetAllMatches = (championshipId: string) => {
    const { data, error, isLoading } = useQuery(
      ['/matches'],
      () => getAllMatchesService(championshipId)
    )
  
    return { data, error, isLoading }
  }