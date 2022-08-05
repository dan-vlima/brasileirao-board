import Column from "../../column";
import GridColumn from "../../grid-column";
import Row from "../../row";
import Text from "../../text";

type AthletesCardProps = {
  name: string;
  role: string;
  team: string;
  teamLogoUrl: string;
  athleteImgUrl: string;
};

const AthleteStats: React.FC<AthletesCardProps> = ({
  name,
  role,
  team,
  teamLogoUrl,
  athleteImgUrl,
}) => {
  return (
    <Row className="justify-between border-t pt-2 pl-4">
      <Row>
        <Row className='space-x-4 pr-4 items-center'>
          <Text>1</Text>
          <Text>a</Text>
        </Row>

        <Column>
          <Text>Germán Cano</Text>
          <Row className="space-x-4">
            <Text>a</Text>
            <Text>Fluminense</Text>
          </Row>
        </Column>
      </Row>
      <Text>12</Text>
    </Row>
  );
};

export default AthleteStats;
