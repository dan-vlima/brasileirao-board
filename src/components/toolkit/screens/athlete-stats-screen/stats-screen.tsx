import { Column, Flex, Row, Text } from "../..";
import { useGetAllStrikers } from "../../../../hooks";
import Container from "../../container";
import ExtendedHeader from "../components/extended-header";
import AthleteStats from "./athlete-stats";

const AthletesStatsScreen = () => {
  const { data: strikers, isLoading: strikersLoading } =
    useGetAllStrikers("14");

  console.log(strikers);

  return (
    <>
      <ExtendedHeader />
      <div className="flex flex-col max-w-full justify-center items-center">
        <Column className="w-[742px]  px-8 py-6  border-x border-b rounded shadow-sm ">
          <Text className="pb-2">Gols</Text>
          <Row className="justify-between pb-2 text-gray-500 text-sm font-semibold">
            <Text className="text-gray-500">Jogador</Text>
            <Text>Gols</Text>
          </Row>
          <AthleteStats/>
        </Column>
      </div>
    </>
  );
};

export default AthletesStatsScreen;
