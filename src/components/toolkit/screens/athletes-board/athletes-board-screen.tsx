import { useGetAllAthletes } from "../../../../hooks";
import AthletesCard from "./athletes-card"

const AthletesBoardScreen = () => {
    const { data: athletes, isLoading: athletesLoading } =
    useGetAllAthletes();

    console.log(athletes)

    return (
        <div className="grid grid-cols-7 w-[44rem] gap-x-6 gap-y-1">
            {athletes?.map(athlete => <div className="pt-1"><AthletesCard key={athlete.Atleta.atleta_id} name={athlete.Atleta.apelido} role={athlete.posicao} team={athlete.clube_nome} teamLogoUrl={athlete.escudo_clube} athleteImgUrl={athlete.Atleta.foto}/></div>)}
            
        </div>
        
    )
}

export default AthletesBoardScreen