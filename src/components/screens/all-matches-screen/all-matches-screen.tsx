import ExtendedHeader from "../../header/extended-header";
import MatchCard from "../championship-board-screen/match-card";
import { Flex } from "../../toolkit";
import Spinner from "../../toolkit/spinner";
import { useGetAllLiveMatches } from "../../../hooks/use-get-all-live-matches";
import HomeFooter from "../../footer/home-footer";
import MatchesGrid from "../../matches-grid/matches-grid";

const AllMatchesScreen = () => {
  return (
    <>
      <ExtendedHeader />
      <div className="flex justify-center">
        <div className="border-b border-x rounded-lg">
          <MatchesGrid/>
          <HomeFooter/>
        </div>
      </div>
    </>
  );
};

export default AllMatchesScreen;
