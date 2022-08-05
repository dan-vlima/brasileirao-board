import { Column, Row, Text } from "../..";
import ArrowLeftIcon from "../../arrow-left";

const ExtendedHeader = () => {
  return (
    <header className="bg-green-800 text-white drop-shadow-lg">
        <Column className="space-y-4">
          <Row className="space-x-2 pl-4 pt-2 items-center">
            <a href='/'><ArrowLeftIcon/></a>
            <Text as='h1' className="text-lg font-medium">Brasileirão Série B</Text>
          </Row>
          <Row className="justify-center text-sm">
          <a href='/'><button className="hover:bg-green-900 h-10 px-7 ">
              PARTIDAS
            </button></a>
            <a href='/standings'><button className="hover:bg-green-900 h-10 px-6 ">
              CLASSIFICAÇÃO
            </button></a>
            <a href='/stats'><button className="hover:bg-green-900 h-10 px-6 ">
              ESTATÍSTICAS
            </button></a>
            <a href='/athletes-board'><button className="hover:bg-green-900 h-10 px-7 ">
              JOGADORES
            </button></a>
          </Row>
        </Column>
      </header>
  )
}

export default ExtendedHeader

