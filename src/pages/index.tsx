import type { NextPage } from "next";
import ChampionshipBoardBox from "../components/screens/championship-board-screen/championship-board-box";


const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <ChampionshipBoardBox/>
    </div>
    
  );
};

export default Home;
