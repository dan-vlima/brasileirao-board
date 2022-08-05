import { useGetStandings } from "../../../hooks";
import Column from "../../toolkit/column";
import Text from "../../toolkit/text";
import ExtendedHeader from "../../header/extended-header";
import TeamStats from "./team-stats";

const StandingsScreen = () => {
  const { data: standings, isLoading: standingsLoading } =
    useGetStandings("14");

  return (
    <>
      <ExtendedHeader />
      <div className="flex flex-col max-w-full items-center">
        <Column className="w-[742px] pb-8 border-x border-b  rounded-b-lg">
          <Column className="text-sm pb-4 space-y-1 pl-6 bg-gray-100">
            <Text className="text-gray-500 pt-3">Temporada</Text>
            <Text className="text-blue-500 font-bold">2022</Text>
          </Column>
          <div className="grid grid-cols-2 text-gray-500">
            <Text className="border-t text-sm pl-6 py-2">Clube</Text>
            <div className="grid grid-cols-9 text-sm border-t pr-6 py-2">
              <Text>Pts</Text>
              <Text>PJ</Text>
              <Text>VIT</Text>
              <Text>E</Text>
              <Text>DER</Text>
              <Text>GP</Text>
              <Text>GC</Text>
              <Text>SG</Text>
              <Text>Últimas</Text>
            </div>
          </div>
          {standings?.map((standing) => (
            <div key={standing.time.time_id}>
              <TeamStats
                rank={standing.posicao}
                team={standing.time.nome_popular}
                score={standing.pontos}
                matchesPlayed={standing.jogos}
                wins={standing.vitorias}
                draws={standing.empates}
                losses={standing.derrotas}
                goalsScored={standing.gols_pro}
                goalsAgainst={standing.gols_contra}
                goalsBalance={standing.saldo_gols}
                lastMatches={standing.ultimos_jogos}
                teamLogoUrl={standing.time.escudo}
              />
            </div>
          ))}
          <div className="grid grid-cols-2 p-8 m-4 border rounded-lg text-sm bg-gray-100">
            <Column className="space-y-1">
              <Text className="font-bold pb-2">
                Qualificação/Rebaixamento
              </Text>
              <Text>
                Fase de grupos da Copa Libertadores
              </Text>
              <Text>
                Qualificatórias da Copa Libertadores
              </Text>
              <Text>
                Fase de grupos da Copa Sul-Americana
              </Text>
              <Text>
                Rebaixamento
              </Text>
            </Column>
            <Column className="space-y-1">
            <Text className="font-bold pb-2">
                Últimas cinco partidas
              </Text>
              <Text>
                V - Vitória
              </Text>
              <Text>
                E - Empate
              </Text>
              <Text>
                D - Derrotas
              </Text>
            </Column>
          </div>
        </Column>
      </div>
    </>
  );
};

export default StandingsScreen;
