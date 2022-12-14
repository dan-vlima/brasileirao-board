import { Column, Row, Text } from "../../toolkit";
import { useGetAllStrikers } from "../../../hooks";
import ExtendedHeader from "../../header/extended-header";
import AthleteStats from "./athlete-stats";
import FlexCenteredSpinner from "../../toolkit/flex-centered-spinner";

const AthletesStatsScreen = () => {
  const { data: strikers, isLoading: strikersIsLoading } =
    useGetAllStrikers("14");

    const strikersMapper = strikers?.map((striker, index) => (
      <AthleteStats
        key={striker.atleta.atleta_id}
        name={striker.atleta.nome_popular}
        teamLogoUrl={striker.time.escudo}
        team={striker.time.nome_popular}
        goals={striker.gols}
        rank={index + 1}
      />
    ))

  return (
    <>
      <ExtendedHeader />
      {strikersIsLoading ? <FlexCenteredSpinner/> : <div className="flex flex-col max-w-full justify-center items-center">
          <Column className="w-[742px]  px-8 pt-6 pb-8 border-x ">
            <Text className="pb-2 pl-4">Gols</Text>
            <Row className="justify-between pb-2 text-gray-500 text-sm font-semibold">
              <Text className="text-gray-500 pl-4">Jogador</Text>
              <div className="pr-4">
                <Text>Gols</Text>
              </div>
            </Row>
            {strikersMapper}
          </Column>
          <Column className="w-[742px]  px-8 pb-8 border-x  ">
            <Text className="pb-2 pl-4">Assistências</Text>
            <Row className="justify-between pb-2 text-gray-500 text-sm font-semibold">
              <Text className="text-gray-500 pl-4">Jogador</Text>
              <div className="pr-4">
                <Text>Gols</Text>
              </div>
            </Row>
            {strikersMapper}
          </Column>
          <Column className="w-[742px] px-8 pb-8 border-x  ">
            <Text className="pb-2 pl-4">Cartões amarelos</Text>
            <Row className="justify-between pb-2 text-gray-500 text-sm font-semibold">
              <Text className="text-gray-500 pl-4">Jogador</Text>
              <div className="pr-4">
                <Text>Gols</Text>
              </div>
            </Row>
            {strikersMapper}
          </Column>
          <Column className="w-[742px]  px-8 pb-8 border-x  ">
            <Text className="pb-2 pl-4">Cartões vermelhos</Text>
            <Row className="justify-between pb-2 text-gray-500 text-sm font-semibold">
              <Text className="text-gray-500 pl-4">Jogador</Text>
              <div className="pr-4">
                <Text>Gols</Text>
              </div>
            </Row>
            {strikersMapper}
          </Column>
      </div>}
      
    </>
  );
};

export default AthletesStatsScreen;
