import { useQuery } from "react-query"
import getAllLiveMatchesService from "../services/get-all-live-matches"


export const useGetAllLiveMatches = () => {
    const { data, error, isLoading } = useQuery(
      ['/live-matches'],
      () => getAllLiveMatchesService()
    )
  
    return { data, error, isLoading }
  }