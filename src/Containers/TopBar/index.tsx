import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useTheme } from '../../Contexts/ThemeContext';
import { EkaText } from 'eka-components';
import logoBase from 'eka-components/dist/assets/images/eka-logo-base.png';
import logoDark from 'eka-components/dist/assets/images/eka-logo-dark.png';
import { LogoTitleWrapper, LogoWrapper, TopBarWrapper } from './styles';

const TopBar: React.FC = () => {
  const { toggleTheme } = useTheme();

  const [logo, setLogo] = useState(logoBase);

  const { theme } = useTheme();

  useEffect(() => {
    if (theme.name === 'dark') {
      setLogo(logoDark)
    } else {
      setLogo(logoBase);
    }
  }, [theme])

  return (
    <TopBarWrapper>
      <LogoTitleWrapper>
        <LogoWrapper>
          <img src={logo} />
        </LogoWrapper>
        <EkaText>APM Data Visualization</EkaText>
      </LogoTitleWrapper>
      <div>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </TopBarWrapper>

  );
};

export default TopBar;