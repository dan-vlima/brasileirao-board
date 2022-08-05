import React from "react";
import { Column, Flex, Row, Text } from "../../toolkit";
import MatchCard from "./match-card";
import { useGetAllLiveMatches } from "../../../hooks/use-get-all-live-matches";
import Spinner from "../../toolkit/spinner";
import SmallHeader from "../../header/small-header";
import HomeFooter from "../../footer/home-footer";


const ChampionshipBoardBox = () => {
  const { data: liveMatches, isLoading: liveMatchesLoading } =
    useGetAllLiveMatches();

  return ( 
    <div className="w-[40rem] border rounded-lg shadow-lg relative">
      <SmallHeader />
      <main>
        {liveMatchesLoading  ? <Flex className="items-center justify-center bg-white py-24"><Spinner/></Flex> : <div className="grid grid-cols-2 divide-x bg-white">
        {liveMatches?.slice(0, 3).map((match) => (
      <MatchCard
        key={match.partida_id}
        homeTeamLogoUrl={match.time_mandante.escudo}
        awayTeamLogoUrl={match.time_visitante.escudo}
        homeTeam={match.time_mandante.nome_popular}
        awayTeam={match.time_visitante.nome_popular}
        homeTeamScore={match.placar_mandante}
        awayTeamScore={match.placar_visitante}
        matchDay={match.data_realizacao}
        matchHour={match.hora_realizacao}
      />
    ))
    } {liveMatches?.slice(0, 3).map((match) => (
      <MatchCard
        key={match.partida_id}
        homeTeamLogoUrl={match.time_mandante.escudo}
        awayTeamLogoUrl={match.time_visitante.escudo}
        homeTeam={match.time_mandante.nome_popular}
        awayTeam={match.time_visitante.nome_popular}
        homeTeamScore={match.placar_mandante}
        awayTeamScore={match.placar_visitante}
        matchDay={match.data_realizacao}
        matchHour={match.hora_realizacao}
      />
    ))
    } 
        </div>}
      </main>
      <HomeFooter/>
    </div>
  );
};

export default ChampionshipBoardBox;
