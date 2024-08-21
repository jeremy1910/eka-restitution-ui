import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useTheme } from '../../Contexts/ThemeContext';

const TopBar: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </Router>
  );
};

export default TopBar;