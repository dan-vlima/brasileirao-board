import { useQuery } from "react-query"
import getAllStrikersService from "../services/get-all-strikers-service"


export const useGetAllStrikers = (championshipId: string) => {
    const { data, error, isLoading } = useQuery(
      ['/strikers'],
      () => getAllStrikersService(championshipId)
    )
  
    return { data, error, isLoading }
  }