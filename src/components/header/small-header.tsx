import { Column, Row, Text } from "../toolkit"


const SmallHeader = () => {
  return (
    <header className="bg-green-800 text-white rounded-t-lg">
        <Column className="space-y-4">
          <Row className="space-x-2 pl-4 pt-4 items-center">
            <img src="data:image/png;base64,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" />
            <Text as='h1' className="text-lg font-medium">Brasileirão Série B</Text>
          </Row>
          <Row className="justify-center text-sm text-gray-100">
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

export default SmallHeader
