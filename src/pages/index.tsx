import type { NextPage } from 'next'
import Head from 'next/head'
import { Teste } from '../components'
import { useGetAllChampionshipData } from '../hooks'


const Home: NextPage = () => {
  const { data: championshipData, isLoading: championshipDataIsLoading } = useGetAllChampionshipData('14')

  console.log(championshipData)

  return (
    <Teste/>
  )
}

export default Home
