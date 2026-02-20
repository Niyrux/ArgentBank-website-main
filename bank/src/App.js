import './App.css';
import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/accueil/accueil';
import Signin from './pages/sign-in/signin';
import Userinfo from './pages/user-info/user-info';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/Profile" element={<Userinfo />} />
    </Routes>

  );
}

export default App;
