import { useGetAllLiveMatches } from "../../hooks/use-get-all-live-matches";
import MatchCard from "../screens/championship-board-screen/match-card";
import { Flex } from "../toolkit";
import Spinner from "../toolkit/spinner";


const MatchesGrid = () => {
    const { data: liveMatches, isLoading: liveMatchesLoading } =
    useGetAllLiveMatches();
    return <>
    {liveMatchesLoading ? (
            <Flex className="items-center justify-center bg-white py-24">
              <Spinner />
            </Flex>
          ) : (
            <div className="grid grid-cols-2 divide-x bg-white">
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
              ))}{" "}
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
              ))}
            </div>
          )}</>
}

export default MatchesGrid
