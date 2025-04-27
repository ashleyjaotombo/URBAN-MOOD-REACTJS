import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Accueil from './pages/Accueil';
import Boutique from './pages/Boutique';
import Favoris from './pages/Favoris';
import Contact from './pages/Contact';
import Compte from './pages/Compte';
import Panier from './pages/Panier';
import Homme from './pages/Homme';
import Femme from './pages/Femme';
import HommePull from './pages/HommePull';
import HommePantalon from './pages/HommePantalon';
import HommeTshirt from './pages/HommeTshirt';
import HommeAccessoire from './pages/HommeAccessoire';
import FemmePull from './pages/FemmePull';
import FemmePantalon from './pages/FemmePantalon';
import FemmeTshirt from './pages/FemmeTshirt';
import FemmeAccessoire from './pages/FemmeAccessoire';
import ArticleScreen from './pages/ArticleScreen';

function App() {
  return (
    <div className="site-body">
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/favoris" element={<Favoris />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/compte" element={<Compte />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/homme" element={<Homme />} />
          <Route path="/femme" element={<Femme />} />
          <Route path="/hommepull" element={<HommePull />} />
          <Route path="/hommepantalon" element={<HommePantalon />} />
          <Route path="/hommetshirt" element={<HommeTshirt />} />
          <Route path="/hommeaccessoire" element={<HommeAccessoire />} />
          <Route path="/femmepull" element={<FemmePull />} />
          <Route path="/femmepantalon" element={<FemmePantalon />} />
          <Route path="/femmetshirt" element={<FemmeTshirt />} />
          <Route path="/femmeaccessoire" element={<FemmeAccessoire />} />
          <Route path="/articlescreen" element={<ArticleScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;