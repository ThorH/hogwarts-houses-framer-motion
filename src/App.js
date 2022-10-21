import { BackgroundStars, GlobalStyle } from './AppStyles';
import { BrowserRouter as Router } from 'react-router-dom';
import NewsLetter from './components/NewsLetter/NewsLetter';
import Header from './components/Header/Header';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {

  return (
    <div>
      <GlobalStyle />
      <BackgroundStars>
        <img src="/images/starparticle.png" alt="Star particle" />
      </BackgroundStars>
      <NewsLetter />
      <Router>
        <Header />
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
