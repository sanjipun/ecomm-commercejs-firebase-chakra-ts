import { Flex } from "@chakra-ui/react";
import Navbar from "Components/Navbar/Navbar";
import Hero from "Views/LandingPage/Hero/Hero";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Flex justifyContent="flex-end">
      </Flex>
    </div>
  );
}

export default App;
