// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes que aparecem em todas as páginas
import Cabecalho from './components/cabecalho';
import Rodape    from './components/Rodape';

// Componentes de cada página
import Home    from './pages/Home';
import Sobre   from './pages/Sobre';
import Contato from './pages/Contato';
import Lojas   from './pages/Lojas';

function App() {
  return (
    <BrowserRouter>
      {/*
        Cabecalho fica FORA do Routes.
        Isso garante que ele apareça em TODAS as páginas,
        independente de qual URL o usuário está.
      */}
      <Cabecalho />

      {/*
        Routes analisa a URL atual e renderiza
        apenas a Route correspondente.
      */}
      <Routes>
        <Route path='/'        element={<Home />}    />
        <Route path='/sobre'   element={<Sobre />}   />
        <Route path='/contato' element={<Contato />} />
        <Route path='/lojas'   element={<Lojas />}   />

        {/* Rota 404: aparece quando nenhuma URL acima combina */}
        <Route path='*' element={
          <div style={{textAlign:'center', padding:'80px'}}>
            <h2>404 — Página não encontrada</h2>
            <p>A página que você buscou não existe.</p>
          </div>
        } />
      </Routes>

      {/* Rodape também fica FORA do Routes */}
      <Rodape />
    </BrowserRouter>
  );
}

export default App;
