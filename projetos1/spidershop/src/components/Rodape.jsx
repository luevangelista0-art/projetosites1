// src/components/Rodape.jsx
import { Link } from 'react-router-dom';
import './Rodape.css';

function Rodape() {
  const ano = new Date().getFullYear();

  return (
    <footer className='rodape'>
      <div className='rodape-conteudo'>

        {/* Coluna 1: Sobre a empresa */}
        <div className='rodape-secao'>
          <h4>MinhaEmpresa</h4>
          <p>Qualidade e excelência</p>
          <p>desde 2010.</p>
        </div>

        {/* Coluna 2: Links rápidos */}
        <div className='rodape-secao'>
          <h4>Links Rápidos</h4>
          <Link to='/'>Home</Link>
          <Link to='/sobre'>Nossa Empresa</Link>
          <Link to='/contato'>Contato</Link>
          <Link to='/lojas'>Nossas Lojas</Link>
        </div>

        {/* Coluna 3: Contato */}
        <div className='rodape-secao'>
          <h4>Contato</h4>
          <p>📧 contato@minhaempresa.com</p>
          <p>📞 (11) 98765-4321</p>
          <p>📍 São Paulo, SP</p>
        </div>

      </div>

      <div className='rodape-direitos'>
        <p>© {ano} MinhaEmpresa. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Rodape;
