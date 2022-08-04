import { Column, Row, Text } from "./toolkit";
import GridColumn from "./toolkit/grid-column";
import GridRow from "./toolkit/grid-row";

const MatchCard = ({}) => {
  return (
    <>
      <Row>
        <GridRow amount="2" className="pr-2 border-r gap-y-1 text-sm py-4">
          <GridColumn amount="4" className="max-w-[175px]">
            <Text className="justify-self-center">A</Text>
            <Text className="col-span-1">Santos</Text>
            <Text className=" justify-self-end col-span-2">2</Text>
          </GridColumn>
          <GridColumn amount="4" className="max-w-[175px]">
            <Text className="justify-self-center">A</Text>
            <Text className="col-span-1">Fluminense</Text>
            <Text className="justify-self-end col-span-2">2</Text>
          </GridColumn>
        </GridRow>
        <Column className="text-xs pl-2 items-center justify-center">
          <Text>Sáb., 06/08</Text>
          <Text>20:30</Text>
        </Column>
      </Row>
    </>

  );
};

export default MatchCard;
