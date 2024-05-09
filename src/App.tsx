import Header from './components/header';
import { GlobalCss } from './styles/styles';

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <div className="container"></div>
    </>
  );
}

export default App;
