import { NavBar } from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import { COLORS } from './style/colors';
import styled, { ThemeProvider} from 'styled-components';

function App() {
  const theme = {
    colors: COLORS,
    fontFamily: 'sans-serif',
  };

  const AppTheme = styled.div`
    font-family: ${props => props.theme.fontFamily};
  `;

  return (
    <ThemeProvider theme={theme}>
      <AppTheme>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<div>page home</div>} />
            <Route path="my-trips" element={<div>page my trips</div>} />
          </Routes>
        </div>
      </AppTheme>
    </ThemeProvider>
  );
}

export default App;
