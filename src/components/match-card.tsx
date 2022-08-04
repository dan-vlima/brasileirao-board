import { Column, Flex, Row, Text } from "./toolkit";
import GridColumn from "./toolkit/grid-column";
import GridRow from "./toolkit/grid-row";

const MatchCard = ({}) => {
  return (
    <>
    <Row className="pt-6 pr-6 pb-6 pl-4 border-b">
        <GridRow amount="2" className="pr-5 border-r gap-y-1 text-sm py-4">
          <GridColumn amount="6" className="max-w-[175px]">
            <Text className="justify-self-center">A</Text>
            <Text className="col-span-2">Santos</Text>
            <Text className=" justify-self-end col-span-3">2</Text>
          </GridColumn>
          <GridColumn amount="6" className="max-w-[175px]">
            <Text className="justify-self-center">A</Text>
            <Text className="col-span-2">Fluminense</Text>
            <Text className="justify-self-end col-span-3">2</Text>
          </GridColumn>
        </GridRow>
        <Column className="text-sm pl-5 justify-center items-center">
          <Row className="space-x-1"><Text >Sáb., </Text><Text >06/08</Text></Row>
          <Text >20:30</Text>
        </Column>
      </Row>
    </>

  );
};

export default MatchCard;
