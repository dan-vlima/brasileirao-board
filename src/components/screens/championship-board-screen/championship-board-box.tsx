import React from "react";
import SmallHeader from "../../header/small-header";
import HomeFooter from "../../footer/home-footer";
import MatchesGrid from "../../matches-grid/matches-grid";

const ChampionshipBoardBox = () => {
  return (
    <div className="w-[40rem] border rounded-lg shadow-lg relative">
      <SmallHeader />

      <MatchesGrid />

      <HomeFooter />
    </div>
  );
};

export default ChampionshipBoardBox;
