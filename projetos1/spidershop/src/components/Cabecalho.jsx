// src/components/Cabecalho.jsx
import { Link, NavLink } from 'react-router-dom';
import './Cabecalho.css';

function Cabecalho() {
  return (
    <header className='cabecalho'>

      {/* Logo — clicável, leva para Home */}
      <Link to='/' className='logo'>
        Spider<span>Shop</span>
      </Link>

      {/* Menu de navegação */}
      <nav>
        {/*
          NavLink é igual ao Link, MAS adiciona automaticamente
          uma classe CSS quando o link está na página atual.
          Usamos isso para destacar o link da página ativa.
        */}
        <NavLink
          to='/'
          className={({ isActive }) => isActive ? 'ativo' : ''}
          end
        >
          Dados Pessoais
        </NavLink>

        <NavLink
          to='/sobre'
          className={({ isActive }) => isActive ? 'ativo' : ''}
        >
          Formação Acadêmica
        </NavLink>

        <NavLink
          to='/contato'
          className={({ isActive }) => isActive ? 'ativo' : ''}
        >
          Experiência Profissional
        </NavLink>

        <NavLink
          to='/lojas'
          className={({ isActive }) => isActive ? 'ativo' : ''}
        >
          Cursos extracurriculares
        </NavLink>
      </nav>

    </header>
  );
}

export default Cabecalho;
