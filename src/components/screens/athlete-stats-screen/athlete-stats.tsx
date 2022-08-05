import Column from "../../toolkit/column";
import Row from "../../toolkit/row";
import Text from "../../toolkit/text";

type AthletesCardProps = {
  name: string;
  goals: number
  teamLogoUrl: string;
  team: string
  rank: number
};

const AthleteStats: React.FC<AthletesCardProps> = ({
  name,
  teamLogoUrl,
  team,
  goals,
  rank,
}) => {
  return (
    <Row className="justify-between border-t py-2 pl-4">
      <Row>
        <Row className='space-x-4 pr-4 items-center'>
          <Text>{rank}</Text>
          <img className="h-10 w-10 rounded-full" src="https://thumbs.dreamstime.com/b/default-placeholder-fitness-trainer-t-shirt-default-placeholder-fitness-trainer-t-shirt-half-length-portrait-photo-116470332.jpg"/>
        </Row>

        <Column>
          <Text>{name}</Text>
          <Row className="space-x-4">
            <img className="h-6 w-4" src={teamLogoUrl} />
            <Text>{team}</Text>
          </Row>
        </Column>
      </Row>
      <Text className="flex items-center pr-4">{goals}</Text>
    </Row>
  );
};

export default AthleteStats;
