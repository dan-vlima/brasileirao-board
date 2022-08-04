import type { NextPage } from "next";
import Head from "next/head";
import ChampionshipBoardBox from "../components/championship-board-box";
import MatchCard from "../components/match-card";
import { Row } from "../components/toolkit";
import GridColumn from "../components/toolkit/grid-column";
import GridRow from "../components/toolkit/grid-row";
import { useGetAllChampionshipData } from "../hooks";

const Home: NextPage = () => {
  const { data: championshipData, isLoading: championshipDataIsLoading } =
    useGetAllChampionshipData("14");

  console.log(championshipData);

  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <ChampionshipBoardBox/>
    </div>
    
  );
};

export default Home;
