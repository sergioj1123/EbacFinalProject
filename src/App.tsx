import { BrowserRouter } from 'react-router-dom';
import { GlobalCss } from './styles/styles';
import Router from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Router />
    </BrowserRouter>
  );
}

export default App;
