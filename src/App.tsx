import Art from '@pages/Art/Art';
import Favorites from '@pages/Favorites/Favorites';
import Home from '@pages/Home/Home';
import { JSX } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/task-art-museum-react" element={<Home />} />
        <Route path="/task-art-museum-react/art/:id" element={<Art />} />
        <Route
          path="/task-art-museum-react/favorites"
          element={<Favorites />}
        />
      </Routes>
    </Router>
  );
}

export default App;
