import { Column, Flex, Row, Text } from "../toolkit"
import ArrowDownIcon from "../toolkit/arrow-down-icon"

const HomeFooter = () => {
    return <footer className="text-sm bg-white rounded-b-lg">
    <Column>
      <Row className="justify-between px-8 border-b pt-4 pb-5">
        <Text>Todos os horários estão no: Horário de Brasília</Text>
        <Text className="italic">Feedback</Text>
      </Row>
      <Flex className=" py-5 relative w-full bg-slate-50 rounded-b-lg">
        <Column className="mx-auto">
          <a href='/all-matches'><button className="absolute mt-[-30px] pl-5 "><ArrowDownIcon/></button></a>
          <Text className="items-center bg-slate-50">Ver mais</Text>
        </Column>
      </Flex>
    </Column>
  </footer>
}

export default HomeFooter