import Restaurant from './components/Restaurant';
import Header from './components/header';
import { GlobalCss } from './styles/styles';

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <div className="container">
        <Restaurant />
      </div>
    </>
  );
}

export default App;
