import { useQuery } from "react-query"
import getAllMatchdaysService from "../services/get-all-matchdays-service"


export const useGetAllMatchdays = (championshipId: string) => {
    const { data, error, isLoading } = useQuery(
      ['/matchdays'],
      () => getAllMatchdaysService(championshipId)
    )
  
    return { data, error, isLoading }
  }