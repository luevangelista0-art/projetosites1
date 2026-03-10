// src/pages/Lojas.jsx
import { useState } from 'react';

const todasLojas = [
  { id:1, nome:'Loja Centro',       cidade:'São Paulo',    estado:'SP', endereco:'Av. Paulista, 1000',   telefone:'(11) 3000-1001', horario:'Seg–Sáb: 9h–20h' },
  { id:2, nome:'Loja Zona Sul',     cidade:'São Paulo',    estado:'SP', endereco:'R. das Flores, 250',   telefone:'(11) 3000-1002', horario:'Seg–Sáb: 9h–20h' },
  { id:3, nome:'Loja Campinas',     cidade:'Campinas',     estado:'SP', endereco:'Av. Brasil, 500',       telefone:'(19) 3100-2001', horario:'Seg–Sáb: 9h–19h' },
  { id:4, nome:'Loja Curitiba',     cidade:'Curitiba',     estado:'PR', endereco:'R. XV de Novembro, 80', telefone:'(41) 3200-3001', horario:'Seg–Sáb: 9h–19h' },
  { id:5, nome:'Loja Porto Alegre', cidade:'Porto Alegre', estado:'RS', endereco:'Av. Ipiranga, 1500',    telefone:'(51) 3300-4001', horario:'Seg–Sáb: 9h–18h' },
  { id:6, nome:'Loja Rio de Janeiro', cidade:'Rio de Janeiro', estado:'RJ', endereco:'Av. Rio Branco, 45', telefone:'(21) 3400-5001', horario:'Seg–Sáb: 9h–20h' },
];

// Lista dos estados para o filtro
const estados = ['Todos', ...new Set(todasLojas.map(l => l.estado))];

function Lojas() {
  const [filtro, setFiltro] = useState('Todos');

  // Filtra as lojas conforme o estado selecionado
  const lojasFiltradas = filtro === 'Todos'
    ? todasLojas
    : todasLojas.filter(l => l.estado === filtro);

  return (
    <div style={{ maxWidth:'1000px', margin:'0 auto', padding:'48px 24px' }}>

      <div style={{ borderLeft:'5px solid #2563EB', paddingLeft:'20px', marginBottom:'32px' }}>
        <h1 style={{ color:'#1E3A5F', fontSize:'2rem' }}>Nossas Lojas</h1>
        <p style={{ color:'#64748B' }}>Encontre a unidade mais próxima de você.</p>
      </div>

      {/* Filtro por estado */}
      <div style={{ marginBottom:'32px', display:'flex', gap:'10px', flexWrap:'wrap' }}>
        <span style={{ fontWeight:'bold', color:'#374151', alignSelf:'center' }}>Filtrar por estado:</span>
        {estados.map(uf => (
          <button
            key={uf}
            onClick={() => setFiltro(uf)}
            style={{
              padding:'6px 16px', borderRadius:'20px', border:'1px solid #CBD5E1',
              background: filtro === uf ? '#2563EB' : 'white',
              color:       filtro === uf ? 'white'   : '#374151',
              cursor:'pointer', fontSize:'0.9rem', fontWeight: filtro === uf ? 'bold' : 'normal',
            }}
          >
            {uf}
          </button>
        ))}
      </div>

      {/* Contagem de resultados */}
      <p style={{ color:'#64748B', marginBottom:'20px' }}>
        {lojasFiltradas.length} loja{lojasFiltradas.length !== 1 ? 's' : ''} encontrada{lojasFiltradas.length !== 1 ? 's' : ''}
      </p>

      {/* Grid de lojas */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:'20px' }}>
        {lojasFiltradas.map(loja => (
          <div key={loja.id} style={{
            background:'white', borderRadius:'12px',
            border:'1px solid #E2E8F0', padding:'24px',
            boxShadow:'0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'start', marginBottom:'12px' }}>
              <h3 style={{ color:'#1E3A5F', fontSize:'1rem' }}>{loja.nome}</h3>
              <span style={{
                background:'#EFF6FF', color:'#2563EB',
                borderRadius:'10px', padding:'2px 10px', fontSize:'0.75rem', fontWeight:'bold'
              }}>
                {loja.estado}
              </span>
            </div>
            <p style={{ color:'#64748B', fontSize:'0.85rem', marginBottom:'4px' }}>📍 {loja.endereco}</p>
            <p style={{ color:'#64748B', fontSize:'0.85rem', marginBottom:'4px' }}>🏙️ {loja.cidade}</p>
            <p style={{ color:'#64748B', fontSize:'0.85rem', marginBottom:'4px' }}>📞 {loja.telefone}</p>
            <p style={{ color:'#64748B', fontSize:'0.85rem' }}>🕐 {loja.horario}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Lojas;
