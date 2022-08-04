import Column from "../../column";
import GridColumn from "../../grid-column";
import Row from "../../row";
import Text from "../../text";

type AthletesCardProps = {
    name: string
    role: string
    team: string
    teamLogoUrl: string
    athleteImgUrl: string
}

const AthletesCard: React.FC<AthletesCardProps> = ({name, role, team, teamLogoUrl, athleteImgUrl}) => {
  return (
    <Column className="w-24 h-48 justify-between border rounded">
      <img
        className="h-24 w-24 border-b"
        src='https://thumbs.dreamstime.com/b/default-placeholder-fitness-trainer-t-shirt-default-placeholder-fitness-trainer-t-shirt-half-length-portrait-photo-116470332.jpg'
      />
      <Text className="pl-2 text-sm">{name}</Text>
      <Text className="pl-2 text-xs text-gray-500">{role}</Text>
      <Row className="justify-center items-center space-x-1 px-2 pb-2">
        <img className="h-4 w-6" src={teamLogoUrl} />
        <Text className="w-full text-xs truncate">{team}</Text>
      </Row>
    </Column>
  );
};

export default AthletesCard;
