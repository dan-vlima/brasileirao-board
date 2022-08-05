import Flex from "./flex";
import Spinner from "./spinner";

const FlexCenteredSpinner = () => {
  return (
    <Flex className="items-center justify-center bg-white py-24">
      <Spinner />
    </Flex>
  )
}

export default FlexCenteredSpinner;
