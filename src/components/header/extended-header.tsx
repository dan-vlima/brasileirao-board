import { Column, Row, Text } from "../toolkit";
import ArrowLeftIcon from "../toolkit/arrow-left";
import HeaderNavbar from "./header-navbar";

const ExtendedHeader = () => {
  return (
    <header className="bg-green-800 text-white drop-shadow-lg pt-2">
        <Column className="space-y-4">
          <Row className="space-x-2 pl-4 pt-2 items-center">
            <a href='/'><ArrowLeftIcon/></a>
            <Text as='h1' className="text-lg font-medium">Brasileirão Série B</Text>
          </Row>
          <Row className="justify-center text-sm">
          <HeaderNavbar/>
          </Row>
        </Column>
      </header>
  )
}

export default ExtendedHeader

