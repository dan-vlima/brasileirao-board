export type MatchdaysDataType = {
   nome : string,
      slug : string,
      rodada : number,
      status : string,
      proxima_rodada : {
        nome : string,
        slug : string,
        rodada : number,
        status : string
     },
      rodada_anterior : null,
      _link : string 
 }