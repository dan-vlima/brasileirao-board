import type { NextPage } from "next";
import Head from "next/head";
import ChampionshipBoardBox from "../components/championship-board-box";
import MatchCard from "../components/match-card";
import { Row } from "../components/toolkit";
import GridColumn from "../components/toolkit/grid-column";
import GridRow from "../components/toolkit/grid-row";
import { useGetAllChampionshipData, useGetAllMatches } from "../hooks";
import { useGetAllLiveMatches } from "../hooks/use-get-all-live-matches";

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <ChampionshipBoardBox/>
    </div>
    
  );
};

export default Home;
