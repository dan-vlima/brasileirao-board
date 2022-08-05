import { useGetAllAthletes } from "../../../../hooks";
import Flex from "../../flex";
import ExtendedHeader from "../header/extended-header";
import AthletesCard from "./athletes-card"

const AthletesBoardScreen = () => {
    const { data: athletes, isLoading: athletesLoading } =
    useGetAllAthletes();

    return (
        <>
        <ExtendedHeader />
        <Flex className="justify-center items-center ">
        <div className="grid grid-cols-7 gap-x-2 gap-y-1 border px-2 shadow">
            {athletes?.map(athlete => <div key={athlete.Atleta.atleta_id} className="pt-1"><AthletesCard  name={athlete.Atleta.apelido} role={athlete.posicao} team={athlete.clube_nome} teamLogoUrl={athlete.escudo_clube}/></div>)}
        </div>
        </Flex>
        </>
    )
}

export default AthletesBoardScreen