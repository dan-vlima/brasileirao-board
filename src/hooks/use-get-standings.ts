import { useQuery } from "react-query"
import getStandingsService from "../services/get-standings-service"


export const useGetStandings = (championshipId: string) => {
    const { data, error, isLoading } = useQuery(
      ['/standings'],
      () => getStandingsService(championshipId)
    )
  
    return { data, error, isLoading }
  }