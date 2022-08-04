import { useQuery } from "react-query"
import getAllAthletesService from "../services/get-all-athletes-service"


export const useGetAllAthletes = () => {
    const { data, error, isLoading } = useQuery(
      ['/athletes'],
      () => getAllAthletesService()
    )
  
    return { data, error, isLoading }
  }