import { PATH } from '@constants/paths';
import Art from '@pages/Art/Art';
import Favorites from '@pages/Favorites/Favorites';
import Home from '@pages/Home/Home';
import { JSX } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App(): JSX.Element {
  const { TO_HOME, TO_ART, TO_FAVORITES } = PATH;

  return (
    <Router>
      <Routes>
        <Route path={TO_HOME} element={<Home />} />
        <Route path={TO_ART} element={<Art />} />
        <Route path={TO_FAVORITES} element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
