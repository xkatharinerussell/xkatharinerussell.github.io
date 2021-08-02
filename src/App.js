import logo from './logo.svg';
import './App.css';
import { Box, Menu, VStack, HStack, Flex, Heading, IconButton, useColorMode, Spacer, Text } from '@chakra-ui/react';
import { FaSun, FaMoon, FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Resume from './components/Resume';
import Nav from './components/Nav';

function App() {

  // const { colorMode, toggleColorMode } = useColorMode();
  // const isDark = colorMode === "dark";

  return (
    
    <VStack>
      <Nav></Nav>
      <Switch>
        <Route path="/dev-profile/" component={Home} exact>
        </Route>
        {/* <Route path="/dev-profile/resume" component={Resume} exact>
        </Route> */}
      </Switch>
    </VStack>
  );
}

export default App;
