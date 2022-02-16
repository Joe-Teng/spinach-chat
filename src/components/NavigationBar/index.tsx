import React, { FC, useState } from "react";
import { useHistory } from 'react-router-dom'
import { NavigationBarContainer, IconBoxTop, IconBoxBottom } from "./index.styles";
import { Box } from "@chakra-ui/react";
import { User, Message, Collect, Aperture, Device, Tool } from '../Icon'

const NavigationBar: FC = ({ children }) => {
  const history = useHistory()
  const [currentNavigator, setCurrentNavigator] = useState<number>(0);

  return (
    <NavigationBarContainer>
      <Box className="navigator-top-content">
        {children}
        <IconBoxTop>
          <Message active={currentNavigator === 0} onClick={() => { setCurrentNavigator(0); history.push('/chat') }} />
          <User active={currentNavigator === 1} onClick={() => { setCurrentNavigator(1); history.push('/friends') }} />
          <Collect active={currentNavigator === 2} onClick={() => { setCurrentNavigator(2); history.push('/collect') }} />
          <Aperture active={currentNavigator === 3} onClick={() => { setCurrentNavigator(3); history.push('/folder') }} />
        </IconBoxTop>
      </Box>
      <Box className="navigator-bottom-content">
        <IconBoxBottom>
          <Device active={currentNavigator === 4} onClick={() => { setCurrentNavigator(4) }} />
          <Tool active={currentNavigator === 5} onClick={() => { setCurrentNavigator(5) }} />
        </IconBoxBottom>
      </Box>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
