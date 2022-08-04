import type { NextPage } from 'next'
import Head from 'next/head'
import MatchCard from '../components/match-card'
import { useGetAllChampionshipData } from '../hooks'


const Home: NextPage = () => {
  const { data: championshipData, isLoading: championshipDataIsLoading } = useGetAllChampionshipData('14')

  console.log(championshipData)

  return (
    <MatchCard/>
  )
}

export default Home
