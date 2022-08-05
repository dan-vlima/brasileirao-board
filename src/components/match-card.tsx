import { Column, Row, Text } from "./toolkit";


export type MatchCardProps = {
  homeTeamLogoUrl: string,
  awayTeamLogoUrl: string,
  homeTeam: string,
  awayTeam: string,
  homeTeamScore: number,
  awayTeamScore: number
  matchDay: string
  matchHour: string
}

const MatchCard: React.FC<MatchCardProps> = ({
  homeTeamLogoUrl, 
  awayTeamLogoUrl, 
  homeTeam, 
  awayTeam, 
  homeTeamScore, 
  awayTeamScore, 
  matchDay, 
  matchHour}) => {
  return (
    <>
      <Row className="justify-around pt-10 pr-2 pb-10 pl-2 border-b shrink-0">
        <Column className="space-y-2 shrink-0 justify-center">
          <img src={homeTeamLogoUrl} className="h-6 w-8"/>
          <img src={awayTeamLogoUrl} className="h-6 w-8"/>
        </Column>
        <Column className="space-y-2 pr-12 shrink-0">
          <Text>{homeTeam}</Text>
          <Text>{awayTeam}</Text>
        </Column>
        <Column className="space-y-2 border-r pr-4 shrink-0">
          <Text>{homeTeamScore}</Text>
          <Text>{awayTeamScore}</Text>
        </Column>
        <Column className=" justify-center items-center text-sm shrink-0">
          <Text>{matchDay}</Text>
          <Text>{matchHour}</Text>
        </Column>
      </Row>
    </>
  );
};

export default MatchCard;
