import { BrowserRouter } from 'react-router-dom';
import { GlobalCss } from './styles/styles';
import Router from './routes';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
