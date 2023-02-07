import { Routes,Route } from 'react-router-dom';
import HomePage from '../components/Homepage/HomePage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/:category?" element={<HomePage />} />
    </Routes>
  );
}

export default App;
