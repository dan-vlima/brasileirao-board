import React from "react";
import { Column, Flex, Row, Text } from "./toolkit";
import MatchCard from "./match-card";
import { useGetAllLiveMatches } from "../hooks/use-get-all-live-matches";
import Spinner from "./toolkit/spinner";
import ChevronDownIcon from "./toolkit/chevron-down-icon";
import { useGetAllAthletes, useGetAllStrikers } from "../hooks";
import SmallHeader from "./toolkit/screens/components/small-header";


const ChampionshipBoardBox = () => {
  const { data: liveMatches, isLoading: liveMatchesLoading } =
    useGetAllLiveMatches();

  console.log(liveMatches);

  return ( 
    <div className="w-[40rem] border rounded shadow-lg relative">
      <SmallHeader />
      <main>
        <img></img>
        {liveMatchesLoading ? <Flex className="items-center justify-center bg-white py-24"><Spinner/></Flex> : <div className="grid grid-cols-2 divide-x bg-white">
        {liveMatches?.map((match) => (
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
      <footer className="text-sm bg-white rounded-b">
        <Column>
          <Row className="justify-between px-8 border-b pt-4 pb-10">
            <Text>Todos os horários estão no: Horário de Brasília</Text>
            <Text className="italic">Feedback</Text>
          </Row>
          <Flex className=" py-5 relative w-full bg-slate-50">
            <Column className="mx-auto">
              <button className="absolute mt-[-30px] pl-5 "><circle><ChevronDownIcon/></circle></button>
              <Text className="items-center  bg-slate-50">Ver mais</Text>
            </Column>
          </Flex>
        </Column>
      </footer>
    </div>
  );
};

export default ChampionshipBoardBox;
