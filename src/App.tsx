import { JSX } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import DetailInfo from './pages/DetailInfo/DetailInfo';
import Favorites from './pages/Favorites/Favorites';

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/task-art-museum-react" element={<Home />} />
        <Route path="details" element={<DetailInfo />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;