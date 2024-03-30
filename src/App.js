import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <AllRoutes />
    </Router>
  );
}

export default App;
