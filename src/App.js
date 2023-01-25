import './App.css';
import { Footer } from './components/footer/Footer';
import { HomeContainer } from './components/home-container/HomeContainer';
import { TopMenu } from './components/top-menu/TopMenu';

function App() {
  return (
    <>
      <div data-testid="bg-image" className="bimg">
        <TopMenu />
      </div>
      <HomeContainer />
      <Footer />
    </>
  );
}

export default App;
