import { Column, Flex, Row, Text } from "./toolkit";
import GridColumn from "./toolkit/grid-column";
import GridRow from "./toolkit/grid-row";

const MatchCard = ({}) => {
  return (
    <>
      <Row className="bg-red-300 justify-around pt-6 pr-6 pb-6 border-b pl-2">
        <Column className="space-y-2">
          <Text>a</Text>
          <Text>b</Text>
        </Column>
        <Column className="space-y-2 pr-12">
          <Text>Santos</Text>
          <Text>Fluminense</Text>
        </Column>
        <Column className="space-y-2 border-r pr-4">
          <Text>2</Text>
          <Text>2</Text>
        </Column>
        <Column className="bg-green-500 justify-center items-center text-sm">
          <Text>Sáb., 06/08</Text>
          <Text>20:30</Text>
        </Column>
      </Row>
    </>
  );
};

export default MatchCard;
