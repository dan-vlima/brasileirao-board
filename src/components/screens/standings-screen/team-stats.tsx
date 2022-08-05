import Row from "../../toolkit/row";
import Text from "../../toolkit/text";

type TeamStatsType = {
  rank: number
  team: string
  score: number
  matchesPlayed: number
  wins: number
  draws: number
  losses: number
  goalsScored: number
  goalsAgainst: number
  goalsBalance: number
  lastMatches: string[]
  teamLogoUrl: string
}

const TeamStats: React.FC<TeamStatsType> = ({
  rank,
  team,
  score, 
  matchesPlayed,
  wins,
  draws,
  losses,
  goalsScored,
  goalsAgainst,
  goalsBalance,
  lastMatches,
  teamLogoUrl,
}) => {
  return (
      <div className="grid grid-cols-2 px-4 py-3 border-t text-sm">
        <Row className="space-x-2">
          <Text className="w-6  text-center">{rank}</Text> 
          <img className="h-6 w-6" src={teamLogoUrl}/> 
          <Text>{team}</Text>
        </Row>
        <div className="grid grid-cols-9">
          <Text>{score}</Text>
          <Text>{matchesPlayed}</Text>
          <Text>{wins}</Text>
          <Text>{draws}</Text>
          <Text>{losses}</Text>
          <Text>{goalsScored}</Text>
          <Text>{goalsAgainst}</Text>
          <Text>{goalsBalance}</Text>
          <Row className="text-xs">{lastMatches.map(result => <Text as='span'>{result.toUpperCase()}</Text>)}</Row>
        </div>
      </div>
      
  )
};

export default TeamStats;