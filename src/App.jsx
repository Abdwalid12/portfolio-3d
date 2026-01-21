import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/accueil';
import Projets from './pages/projets';
import APropos from './pages/a propos';
import Contact from './pages/contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white w-full overflow-x-hidden">
        <Navbar />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;