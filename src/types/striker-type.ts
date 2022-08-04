import { Url } from 'url'

export type StrikerType = 
   { 
      atleta: { 
        atleta_id: number,
        nome_popular: string,
        posicao: {nome: string, sigla: string}
      },
      time: {
        time_id: number,
        nome_popular: string,
        sigla: string,
        escudo: Url
      },
      gols: number
    }
 